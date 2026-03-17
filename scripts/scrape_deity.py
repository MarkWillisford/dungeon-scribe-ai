#!/usr/bin/env python3
"""
Deity scraper for Dungeon Scribe AI 1.1.
Fetches deity pages from Archives of Nethys and outputs TypeScript batch files.

Usage:
  python3 scripts/scrape_deity.py <batch_number>

Batch definitions are hardcoded below.
"""

import sys
import re
import time
import urllib.request
import urllib.parse
import html
from html.parser import HTMLParser

# ---------------------------------------------------------------------------
# HTML stripping
# ---------------------------------------------------------------------------

class MLStripper(HTMLParser):
    def __init__(self):
        super().__init__()
        self.reset()
        self.fed = []
    def handle_data(self, d):
        self.fed.append(d)
    def get_data(self):
        return ''.join(self.fed)

def strip_tags(s):
    stripper = MLStripper()
    stripper.feed(s)
    return stripper.get_data()

def clean(s):
    """Strip HTML tags, unescape HTML entities, collapse whitespace."""
    s = strip_tags(s)
    s = html.unescape(s)
    s = re.sub(r'\s+', ' ', s).strip()
    return s

# ---------------------------------------------------------------------------
# Fetch
# ---------------------------------------------------------------------------

def fetch(url, retries=3):
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers={
                'User-Agent': 'Mozilla/5.0 (compatible; DungeonScribeScraper/1.0)'
            })
            with urllib.request.urlopen(req, timeout=30) as resp:
                return resp.read().decode('utf-8', errors='replace')
        except Exception as e:
            if attempt < retries - 1:
                time.sleep(2)
                continue
            return None
    return None

# ---------------------------------------------------------------------------
# Parse
# ---------------------------------------------------------------------------

def extract_between(html_str, start_marker, end_markers):
    """Extract text between start_marker and the first of end_markers."""
    idx = html_str.find(start_marker)
    if idx == -1:
        return None
    idx += len(start_marker)
    end_idx = len(html_str)
    for em in end_markers:
        pos = html_str.find(em, idx)
        if pos != -1 and pos < end_idx:
            end_idx = pos
    return html_str[idx:end_idx]

def extract_domain_ids(html_snippet):
    """Extract domain/subdomain names and convert to kebab-case IDs."""
    # Find all link texts inside DomainDisplay links
    # Pattern: >DomainName< or >Name (ParentDomain)<
    # We want to produce kebab-case IDs like 'good', 'good-agathion', 'community-family'
    ids = []
    # Match text of anchor tags that reference DomainDisplay
    for m in re.finditer(r'DomainDisplay[^>]*>([^<]+)</a>', html_snippet):
        raw = m.group(1).strip()
        # Handle patterns like "Archon (Good)" -> good-archon
        # "Family" -> family
        # "Education (Community)" -> community-education
        paren_match = re.match(r'^(.+?)\s*\((.+?)\)$', raw)
        if paren_match:
            subdomain_name = paren_match.group(1).strip()
            parent_name = paren_match.group(2).strip()
            # ID: parent-subdomain (kebab)
            domain_id = to_kebab(parent_name) + '-' + to_kebab(subdomain_name)
        else:
            domain_id = to_kebab(raw)
        if domain_id and domain_id not in ids:
            ids.append(domain_id)
    return ids

def to_kebab(s):
    """Convert a string to kebab-case."""
    # Remove apostrophes and special chars, replace spaces/underscores with hyphens
    s = s.lower()
    s = re.sub(r"['\u2019]", '', s)
    s = re.sub(r"[^a-z0-9\s-]", '', s)
    s = re.sub(r'[\s_]+', '-', s)
    s = re.sub(r'-+', '-', s)
    s = s.strip('-')
    return s

def to_camel(s):
    """Convert a string to camelCase variable name."""
    # Handle special chars
    s = re.sub(r"['\u2019]", '', s)
    s = re.sub(r'[^a-zA-Z0-9\s]', ' ', s)
    parts = s.split()
    if not parts:
        return 'unknown'
    result = parts[0].lower()
    for p in parts[1:]:
        result += p[0].upper() + p[1:].lower() if p else ''
    # Ensure starts with lowercase letter
    if result and result[0].isdigit():
        result = '_' + result
    return result

def ts_escape(s):
    """Escape a string for use in a TypeScript string literal (backtick-quoted)."""
    s = s.replace('\\', '\\\\')
    s = s.replace('`', '\\`')
    s = s.replace('${', '\\${')
    return s

def parse_source(html_str):
    """Extract source book name from the first Source link on the page."""
    m = re.search(r'<b>Source</b>.*?<i>([^<]+)</i>', html_str)
    if m:
        src_text = m.group(1).strip()
        # Map to source IDs
        if 'Inner Sea Gods' in src_text:
            return 'pf1e-inner-sea-gods'
        elif 'Inner Sea World Guide' in src_text:
            return 'pf1e-inner-sea-world-guide'
        elif 'Pathfinder #' in src_text or 'Adventure Path' in src_text.lower():
            return 'pf1e-ap'
        elif 'Gods and Magic' in src_text:
            return 'pf1e-gods-and-magic'
        elif 'Chronicles of the Righteous' in src_text:
            return 'pf1e-chronicles-righteous'
        elif 'Book of the Damned' in src_text:
            return 'pf1e-book-of-the-damned'
        elif 'Concordance of Rivals' in src_text:
            return 'pf1e-concordance-rivals'
        elif 'Demon Hunter' in src_text:
            return 'pf1e-inner-sea-gods'
        elif 'Core Rulebook' in src_text:
            return 'pf1e-core'
        else:
            return 'pf1e-inner-sea-gods'
    return 'pf1e-inner-sea-gods'

def parse_boon_tier(text, tier_num):
    """Extract a single boon tier description from text."""
    # Pattern: "1: Name (Type) description text"
    # Find the start of this tier
    prefix = f'{tier_num}:'
    idx = text.find(prefix)
    if idx == -1:
        return None
    # Find start of next tier or end
    next_tier = f'{tier_num + 1}:'
    end_idx = text.find(next_tier, idx)
    if end_idx == -1:
        end_idx = len(text)
    tier_text = text[idx:end_idx].strip()
    return clean(tier_text)

def parse_boons_section(html_str, section_name):
    """Parse a boons section (Evangelist/Exalted/Sentinel) and return list of 3 tier descriptions."""
    # Find the section header
    marker = f'<h3 class="framing"'
    # Find the section by looking for the section name after a framing header
    pattern = rf'<h3 class="framing"[^>]*>.*?{re.escape(section_name)}.*?</h3>(.*?)(?=<h3 class="framing"|<h2 class="title"|$)'
    m = re.search(pattern, html_str, re.DOTALL | re.IGNORECASE)
    if not m:
        return None

    section_html = m.group(1)
    section_text = clean(section_html)

    tiers = []
    for i in range(1, 4):
        tier_desc = parse_boon_tier(section_text, i)
        if tier_desc:
            tiers.append({'tier': i, 'description': tier_desc})

    if len(tiers) != 3:
        return None
    return tiers

def parse_deity_page(html_str, name, pantheon):
    """Parse a deity HTML page and return a dict of fields."""
    # Get the main content block
    content_match = re.search(r'<span id="MainContent_DataListTypes_LabelName_0">(.*?)</span>', html_str, re.DOTALL)
    if not content_match:
        # Try alternate pattern
        content_match = re.search(r'<span id="MainContent_[^"]*LabelName_0">(.*?)</span>', html_str, re.DOTALL)
    if not content_match:
        return None

    content = content_match.group(1)

    deity = {}
    deity['name'] = name
    deity['pantheon'] = pantheon

    # ID: kebab-case of the name, stripping group prefixes
    raw_name = name
    # Strip "Demon Lord, ", "Empyreal Lord, ", etc.
    raw_name = re.sub(r'^(Demon Lord|Archdevil|Asura Rana|Empyreal Lord|Daemon Harbinger|Elemental Lord),\s*', '', raw_name, flags=re.IGNORECASE)
    deity['id'] = to_kebab(raw_name)

    # Title (epithet)
    title_match = re.search(r'<h2><b>([^<]+)</b></h2>', content)
    if title_match:
        deity['title'] = clean(title_match.group(1))

    # Source
    deity['source'] = parse_source(content)

    # Alignment
    align_match = re.search(r'<b>Alignment</b>\s*([A-Z]{1,2})', content)
    if align_match:
        deity['alignment'] = align_match.group(1).strip()

    # Portfolio (Areas of Concern)
    concern_match = re.search(r'<b>Areas of Concern</b>\s*(.*?)(?:<br|<b)', content, re.DOTALL)
    if concern_match:
        deity['portfolio'] = clean(concern_match.group(1))

    # Domains (only the main domain links, not subdomains)
    domains_match = re.search(r'<b>Domains</b>\s*(.*?)<br', content, re.DOTALL)
    if domains_match:
        domain_html = domains_match.group(1)
        # Extract plain domain names (not subdomain format)
        domain_names = re.findall(r'DomainDisplay[^>]*>([^<(]+)</a>', domain_html)
        deity['domains'] = [to_kebab(d.strip()) for d in domain_names if '(' not in d]

    # Subdomains
    subdomains_match = re.search(r'<b>Subdomains</b>\s*(.*?)<br', content, re.DOTALL)
    if subdomains_match:
        subdomain_html = subdomains_match.group(1)
        # Extract subdomain names in format "Name (Parent)" -> parent-name
        subdomain_ids = []
        for m in re.finditer(r'>([^<]+)</a>', subdomain_html):
            raw = m.group(1).strip()
            paren = re.match(r'^(.+?)\s*\((.+?)\)$', raw)
            if paren:
                sub = to_kebab(paren.group(1).strip())
                parent = to_kebab(paren.group(2).strip())
                sid = parent + '-' + sub
            else:
                sid = to_kebab(raw)
            if sid not in subdomain_ids:
                subdomain_ids.append(sid)
        deity['subdomains'] = subdomain_ids

    # Favored Weapon
    weapon_match = re.search(r'<b>Favored Weapon</b>\s*(.*?)(?:<br|<b|$)', content, re.DOTALL)
    if weapon_match:
        weapon_text = clean(weapon_match.group(1))
        deity['favoredWeapon'] = weapon_text

    # Symbol
    symbol_match = re.search(r'<b>Symbol</b>\s*(.*?)(?:<br|<b|$)', content, re.DOTALL)
    if symbol_match:
        deity['symbol'] = clean(symbol_match.group(1))

    # Sacred Animal
    animal_match = re.search(r'<b>Sacred Animal\(?s?\)?</b>\s*(.*?)(?:<br|<b|$)', content, re.DOTALL)
    if animal_match:
        a = clean(animal_match.group(1))
        if a and a.lower() not in ('none', '—', '-', ''):
            deity['sacredAnimal'] = a

    # Sacred Colors
    colors_match = re.search(r'<b>Sacred Color\(?s?\)?</b>\s*(.*?)(?:<br|<b|$)', content, re.DOTALL)
    if colors_match:
        c = clean(colors_match.group(1))
        if c and c.lower() not in ('none', '—', '-', ''):
            # Split by comma or "and"
            parts = re.split(r',\s*|\s+and\s+', c)
            deity['sacredColors'] = [p.strip().lower() for p in parts if p.strip()]

    # Allowed cleric alignments (derived from alignment, not copied)
    alignment_map = {
        'LG': ['LG', 'LN', 'NG'],
        'NG': ['LG', 'NG', 'CG', 'N'],
        'CG': ['NG', 'CG', 'CN'],
        'LN': ['LG', 'LN', 'LE', 'N'],
        'N':  ['LN', 'N', 'CN', 'NG', 'NE'],
        'CN': ['CG', 'CN', 'CE', 'N'],
        'LE': ['LG', 'LN', 'LE', 'NE'],
        'NE': ['N', 'NE', 'LE', 'CE'],
        'CE': ['CN', 'NE', 'CE'],
    }
    if 'alignment' in deity:
        deity['allowedClericAlignments'] = alignment_map.get(deity['alignment'], [])

    # Description: look for flavor text. Check "On Golarion" or just grab some description.
    # Try to get a short description from the page intro or "On Golarion" section
    # For now, skip description — it's optional

    # Obedience (for boons)
    obedience_match = re.search(r'<h3 class="framing">Obedience</h3>(.*?)(?=<h3 class="framing"|<h2 class="title"|$)', content, re.DOTALL)
    obedience_text = None
    if obedience_match:
        obedience_text = clean(obedience_match.group(1))
        # Remove the "Gain a +N bonus..." trailing part if needed — actually keep it all
        obedience_text = obedience_text.strip()

    # Boons
    if obedience_text:
        evangelist = parse_boons_section(content, 'Evangelist')
        exalted = parse_boons_section(content, 'Exalted')
        sentinel = parse_boons_section(content, 'Sentinel')

        if evangelist and exalted and sentinel:
            deity['boons'] = {
                'obedienceRequirement': obedience_text,
                'evangelist': evangelist,
                'exalted': exalted,
                'sentinel': sentinel,
            }

    return deity

# ---------------------------------------------------------------------------
# TypeScript generation
# ---------------------------------------------------------------------------

def ts_string(s):
    """Return a TypeScript template-literal string."""
    return '`' + ts_escape(s) + '`'

def ts_array_of_strings(lst):
    """Return a TypeScript array of string literals."""
    items = ', '.join(f"'{x}'" for x in lst)
    return f'[{items}]'

def ts_boon_tier(tier):
    return f"""    {{ tier: {tier['tier']}, description: {ts_string(tier['description'])} }}"""

def ts_boons(boons):
    ev_lines = ',\n'.join(ts_boon_tier(t) for t in boons['evangelist'])
    ex_lines = ',\n'.join(ts_boon_tier(t) for t in boons['exalted'])
    se_lines = ',\n'.join(ts_boon_tier(t) for t in boons['sentinel'])
    return f"""  boons: {{
    obedienceRequirement: {ts_string(boons['obedienceRequirement'])},
    evangelist: [
{ev_lines},
    ],
    exalted: [
{ex_lines},
    ],
    sentinel: [
{se_lines},
    ],
  }}"""

def deity_to_ts(deity, var_name):
    lines = [f"export const {var_name}: DeityEntry = {{"]
    # Use backtick template literals for ALL string fields to safely handle apostrophes
    lines.append(f"  id: '{deity['id']}',")
    lines.append(f"  name: {ts_string(deity['name'])},")
    if 'title' in deity:
        lines.append(f"  title: {ts_string(deity['title'])},")
    lines.append(f"  alignment: '{deity.get('alignment', 'N')}',")
    lines.append(f"  pantheon: '{deity['pantheon']}',")
    lines.append(f"  portfolio: {ts_string(deity.get('portfolio', ''))},")
    lines.append(f"  domains: {ts_array_of_strings(deity.get('domains', []))},")
    lines.append(f"  subdomains: {ts_array_of_strings(deity.get('subdomains', []))},")
    lines.append(f"  favoredWeapon: {ts_string(deity.get('favoredWeapon', ''))},")
    lines.append(f"  allowedClericAlignments: {ts_array_of_strings(deity.get('allowedClericAlignments', []))},")
    if 'symbol' in deity:
        lines.append(f"  symbol: {ts_string(deity['symbol'])},")
    if 'sacredAnimal' in deity:
        lines.append(f"  sacredAnimal: {ts_string(deity['sacredAnimal'])},")
    if 'sacredColors' in deity:
        lines.append(f"  sacredColors: {ts_array_of_strings(deity['sacredColors'])},")
    if 'description' in deity:
        lines.append(f"  description: {ts_string(deity['description'])},")
    if 'boons' in deity:
        lines.append(ts_boons(deity['boons']) + ',')
    lines.append(f"  source: '{deity.get('source', 'pf1e-inner-sea-gods')}',")
    lines.append("  isOfficial: true,")
    lines.append("  visibility: 'global',")
    lines.append("  rev: 1,")
    lines.append("};")
    return '\n'.join(lines)

def stub_deity(name, var_name, pantheon, url1, url2):
    kid = to_kebab(re.sub(r'^(Demon Lord|Archdevil|Asura Rana|Empyreal Lord|Daemon Harbinger|Elemental Lord),\s*', '', name, flags=re.IGNORECASE))
    return f"""export const {var_name}: DeityEntry = {{
  id: '{kid}',
  name: '{name}',
  alignment: 'N',
  pantheon: '{pantheon}',
  portfolio: 'PAGE_FETCH_FAILED',
  domains: [],
  subdomains: [],
  favoredWeapon: 'PAGE_FETCH_FAILED',
  allowedClericAlignments: [],
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
}};"""

# ---------------------------------------------------------------------------
# Batch definitions
# ---------------------------------------------------------------------------

BATCHES = {
    1: {
        'first': 'Erastil', 'last': 'Gozreh',
        'entries': [
            ('Erastil', 'Erastil', 'Core Deities'),
            ('Iomedae', 'Iomedae', 'Core Deities'),
            ('Torag', 'Torag', 'Core Deities'),
            ('Sarenrae', 'Sarenrae', 'Core Deities'),
            ('Shelyn', 'Shelyn', 'Core Deities'),
            ('Cayden Cailean', 'Cayden%20Cailean', 'Core Deities'),
            ('Desna', 'Desna', 'Core Deities'),
            ('Abadar', 'Abadar', 'Core Deities'),
            ('Irori', 'Irori', 'Core Deities'),
            ('Gozreh', 'Gozreh', 'Core Deities'),
        ]
    },
    2: {
        'first': 'Green Faith', 'last': 'Lamashtu',
        'entries': [
            ('Green Faith', 'Green%20Faith', 'Core Deities'),
            ('Nethys', 'Nethys', 'Core Deities'),
            ('Pharasma', 'Pharasma', 'Core Deities'),
            ('Calistria', 'Calistria', 'Core Deities'),
            ('Gorum', 'Gorum', 'Core Deities'),
            ('Asmodeus', 'Asmodeus', 'Core Deities'),
            ('Zon-Kuthon', 'Zon-Kuthon', 'Core Deities'),
            ('Norgorber', 'Norgorber', 'Core Deities'),
            ('Urgathoa', 'Urgathoa', 'Core Deities'),
            ('Lamashtu', 'Lamashtu', 'Core Deities'),
        ]
    },
    3: {
        'first': 'Rovagug', 'last': 'Milani',
        'entries': [
            ('Rovagug', 'Rovagug', 'Core Deities'),
            ('Apsu', 'Apsu', 'Other Deities'),
            ('Easivra', 'Easivra', 'Other Deities'),
            ('Gruhastha', 'Gruhastha', 'Other Deities'),
            ('Cihua Couatl', 'Cihua%20Couatl', 'Other Deities'),
            ('Kazutal', 'Kazutal', 'Other Deities'),
            ('Kurgess', 'Kurgess', 'Other Deities'),
            ('Mazludeh', 'Mazludeh', 'Other Deities'),
            ('Omrataji', 'Omrataji', 'Other Deities'),
            ('Milani', 'Milani', 'Other Deities'),
        ]
    },
    4: {
        'first': 'Alseta', 'last': 'Ashukharma',
        'entries': [
            ('Alseta', 'Alseta', 'Other Deities'),
            ('Erecura', 'Erecura', 'Other Deities'),
            ('Matravash', 'Matravash', 'Other Deities'),
            ('Brigh', 'Brigh', 'Other Deities'),
            ('Feronia', 'Feronia', 'Other Deities'),
            ('Grandmother Spider', 'Grandmother%20Spider', 'Other Deities'),
            ('Naderi', 'Naderi', 'Other Deities'),
            ('Nivi Rhombodazzle', 'Nivi%20Rhombodazzle', 'Other Deities'),
            ('Sivanah', 'Sivanah', 'Other Deities'),
            ('Ashukharma', 'Ashukharma', 'Other Deities'),
        ]
    },
    5: {
        'first': 'Besmara', 'last': 'Ahriman',
        'entries': [
            ('Besmara', 'Besmara', 'Other Deities'),
            ('Groetus', 'Groetus', 'Other Deities'),
            ('Hanspur', 'Hanspur', 'Other Deities'),
            ('Nocticula (Redeemed)', 'Nocticula%20(Redeemed)', 'Other Deities'),
            ('Speakers of the Depths', 'Speakers%20of%20the%20Depths', 'Other Deities'),
            ('Achaekek', 'Achaekek', 'Other Deities'),
            ('Dhalavei', 'Dhalavei', 'Other Deities'),
            ('Lissala', 'Lissala', 'Other Deities'),
            ('Ah Pook', 'Ah%20Pook', 'Other Deities'),
            ('Ahriman', 'Ahriman', 'Other Deities'),
        ]
    },
    6: {
        'first': 'Alazhra', 'last': 'Monad',
        'entries': [
            ('Alazhra', 'Alazhra', 'Other Deities'),
            ('Arazni', 'Arazni', 'Other Deities'),
            ('Zyphus', 'Zyphus', 'Other Deities'),
            ('Camazotz', 'Camazotz', 'Other Deities'),
            ('Dahak', 'Dahak', 'Other Deities'),
            ('Ghlaunder', 'Ghlaunder', 'Other Deities'),
            ('Gyronna', 'Gyronna', 'Other Deities'),
            ('Kitumu', 'Kitumu', 'Other Deities'),
            ('Ydersius', 'Ydersius', 'Other Deities'),
            ('Monad', 'Monad', 'Aeon'),
        ]
    },
    7: {
        'first': 'Baalzebul', 'last': 'Bohga',
        'entries': [
            ('Baalzebul', 'Baalzebul', 'Archdevils'),
            ('Barbatos', 'Barbatos', 'Archdevils'),
            ('Belial', 'Belial', 'Archdevils'),
            ('Dispater', 'Dispater', 'Archdevils'),
            ('Geryon', 'Geryon', 'Archdevils'),
            ('Mammon', 'Mammon', 'Archdevils'),
            ('Mephistopheles', 'Mephistopheles', 'Archdevils'),
            ('Moloch', 'Moloch', 'Archdevils'),
            ('Andak', 'Andak', 'Asura Ranas'),
            ('Bohga', 'Bohga', 'Asura Ranas'),
        ]
    },
    8: {
        'first': 'Chugarra', 'last': 'Taraksun',
        'entries': [
            ('Chugarra', 'Chugarra', 'Asura Ranas'),
            ('Chupurvagasti', 'Chupurvagasti', 'Asura Ranas'),
            ('Gavidya', 'Gavidya', 'Asura Ranas'),
            ('Hydim', 'Hydim', 'Asura Ranas'),
            ('Ioramvol', 'Ioramvol', 'Asura Ranas'),
            ('Maeha', 'Maeha', 'Asura Ranas'),
            ('Onamahli', 'Onamahli', 'Asura Ranas'),
            ('Rahu', 'Rahu', 'Asura Ranas'),
            ('Rytara', 'Rytara', 'Asura Ranas'),
            ('Taraksun', 'Taraksun', 'Asura Ranas'),
        ]
    },
    9: {
        'first': 'Zurapadyn', 'last': 'Acavna',
        'entries': [
            ('Zurapadyn', 'Zurapadyn', 'Asura Ranas'),
            ('Aesocar', 'Aesocar', 'Azlanti Pantheon'),
            ('Myr', 'Myr', 'Azlanti Pantheon'),
            ('Jaidi', 'Jaidi', 'Azlanti Pantheon'),
            ('Shelyn (pre-Earthfall)', 'Shelyn%20(pre-Earthfall)', 'Azlanti Pantheon'),
            ('Elion', 'Elion', 'Azlanti Pantheon'),
            ('Amaznen', 'Amaznen', 'Azlanti Pantheon'),
            ('Lissala (pre-Earthfall)', 'Lissala%20(pre-Earthfall)', 'Azlanti Pantheon'),
            ('Onos', 'Onos', 'Azlanti Pantheon'),
            ('Acavna', 'Acavna', 'Azlanti Pantheon'),
        ]
    },
    10: {
        'first': 'Sicva', 'last': 'Corosbel',
        'entries': [
            ('Sicva', 'Sicva', 'Azlanti Pantheon'),
            ('Scal', 'Scal', 'Azlanti Pantheon'),
            ('Ulon', 'Ulon', 'Azlanti Pantheon'),
            ('Aesdurath', 'Aesdurath', 'Daemon Harbingers'),
            ('Ajids', 'Ajids', 'Daemon Harbingers'),
            ('Anogetz', 'Anogetz', 'Daemon Harbingers'),
            ('Arlachramas', 'Arlachramas', 'Daemon Harbingers'),
            ('Braismois', 'Braismois', 'Daemon Harbingers'),
            ('Cixyron', 'Cixyron', 'Daemon Harbingers'),
            ('Corosbel', 'Corosbel', 'Daemon Harbingers'),
        ]
    },
    11: {
        'first': 'Diceid', 'last': 'Nalmungder',
        'entries': [
            ('Diceid', 'Diceid', 'Daemon Harbingers'),
            ('Ealdeez', 'Ealdeez', 'Daemon Harbingers'),
            ('Folca', 'Folca', 'Daemon Harbingers'),
            ('Geon', 'Geon', 'Daemon Harbingers'),
            ('Hastrikhal', 'Hastrikhal', 'Daemon Harbingers'),
            ('Jacarkas', 'Jacarkas', 'Daemon Harbingers'),
            ('Laivatiniel', 'Laivatiniel', 'Daemon Harbingers'),
            ('Llamolaek', 'Llamolaek', 'Daemon Harbingers'),
            ('Mneoc', 'Mneoc', 'Daemon Harbingers'),
            ('Nalmungder', 'Nalmungder', 'Daemon Harbingers'),
        ]
    },
    12: {
        'first': 'Osolmyr', 'last': 'Vorasha',
        'entries': [
            ('Osolmyr', 'Osolmyr', 'Daemon Harbingers'),
            ('Pavnuri', 'Pavnuri', 'Daemon Harbingers'),
            ('Roqorolos', 'Roqorolos', 'Daemon Harbingers'),
            ('Ruapceras', 'Ruapceras', 'Daemon Harbingers'),
            ('Slandrais', 'Slandrais', 'Daemon Harbingers'),
            ('Stygidvod', 'Stygidvod', 'Daemon Harbingers'),
            ('Tamede', 'Tamede', 'Daemon Harbingers'),
            ('Tresmalvos', 'Tresmalvos', 'Daemon Harbingers'),
            ('Uaransaph', 'Uaransaph', 'Daemon Harbingers'),
            ('Vorasha', 'Vorasha', 'Daemon Harbingers'),
        ]
    },
    13: {
        'first': 'Xsistaid', 'last': 'Neith',
        'entries': [
            ('Xsistaid', 'Xsistaid', 'Daemon Harbingers'),
            ('Zaigasnar', 'Zaigasnar', 'Daemon Harbingers'),
            ('Zelishkar', 'Zelishkar', 'Daemon Harbingers'),
            ('Aroden', 'Aroden', 'Dead Deities'),
            ('Osiris', 'Osiris', 'Deities of Ancient Osirion'),
            ('Wadjet', 'Wadjet', 'Deities of Ancient Osirion'),
            ('Bes', 'Bes', 'Deities of Ancient Osirion'),
            ('Isis', 'Isis', 'Deities of Ancient Osirion'),
            ('Khepri', 'Khepri', 'Deities of Ancient Osirion'),
            ('Neith', 'Neith', 'Deities of Ancient Osirion'),
        ]
    },
    14: {
        'first': 'Hathor', 'last': 'Nephthys',
        'entries': [
            ('Hathor', 'Hathor', 'Deities of Ancient Osirion'),
            ('Selket', 'Selket', 'Deities of Ancient Osirion'),
            ('Anubis', 'Anubis', 'Deities of Ancient Osirion'),
            ('Horus', 'Horus', 'Deities of Ancient Osirion'),
            ('Maat', 'Maat', 'Deities of Ancient Osirion'),
            ('Ra', 'Ra', 'Deities of Ancient Osirion'),
            ('Thoth', 'Thoth', 'Deities of Ancient Osirion'),
            ('Ptah', 'Ptah', 'Deities of Ancient Osirion'),
            ('Bastet', 'Bastet', 'Deities of Ancient Osirion'),
            ('Nephthys', 'Nephthys', 'Deities of Ancient Osirion'),
        ]
    },
    15: {
        'first': 'Sekhmet', 'last': 'Nalinivati',
        'entries': [
            ('Sekhmet', 'Sekhmet', 'Deities of Ancient Osirion'),
            ('Sobek', 'Sobek', 'Deities of Ancient Osirion'),
            ('Set', 'Set', 'Deities of Ancient Osirion'),
            ('Apep', 'Apep', 'Deities of Ancient Osirion'),
            ('Shizuru', 'Shizuru', 'Deities of Tian Xia'),
            ('Tsukiyo', 'Tsukiyo', 'Deities of Tian Xia'),
            ('Qi Zhong', 'Qi%20Zhong', 'Deities of Tian Xia'),
            ('Kofusachi', 'Kofusachi', 'Deities of Tian Xia'),
            ('Daikitsu', 'Daikitsu', 'Deities of Tian Xia'),
            ('Nalinivati', 'Nalinivati', 'Deities of Tian Xia'),
        ]
    },
    16: {
        'first': 'Yamatsumi', 'last': 'Aldinach',
        'entries': [
            ('Yamatsumi', 'Yamatsumi', 'Deities of Tian Xia'),
            ('Hei Feng', 'Hei%20Feng', 'Deities of Tian Xia'),
            ('Sun Wukong', 'Sun%20Wukong', 'Deities of Tian Xia'),
            ('General Susumu', 'General%20Susumu', 'Deities of Tian Xia'),
            ('Yaezhing', 'Yaezhing', 'Deities of Tian Xia'),
            ('Fumeiyoshi', 'Fumeiyoshi', 'Deities of Tian Xia'),
            ('Lao Shu Po', 'Lao%20Shu%20Po', 'Deities of Tian Xia'),
            ('Lady Nanbyo', 'Lady%20Nanbyo', 'Deities of Tian Xia'),
            ('Abraxas', 'Abraxas', 'Demon Lords'),
            ('Aldinach', 'Aldinach', 'Demon Lords'),
        ]
    },
    17: {
        'first': 'Andirifkhu', 'last': 'Haagenti',
        'entries': [
            ('Andirifkhu', 'Andirifkhu', 'Demon Lords'),
            ('Angazhan', 'Angazhan', 'Demon Lords'),
            ('Areshkagal', 'Areshkagal', 'Demon Lords'),
            ('Baphomet', 'Baphomet', 'Demon Lords'),
            ("Cyth-V'sug", 'Cyth-V%27sug', 'Demon Lords'),
            ('Dagon', 'Dagon', 'Demon Lords'),
            ('Deskari', 'Deskari', 'Demon Lords'),
            ('Flauros', 'Flauros', 'Demon Lords'),
            ('Gogunta', 'Gogunta', 'Demon Lords'),
            ('Haagenti', 'Haagenti', 'Demon Lords'),
        ]
    },
    18: {
        'first': 'Jezelda', 'last': 'Pazuzu',
        'entries': [
            ('Jezelda', 'Jezelda', 'Demon Lords'),
            ('Jubilex', 'Jubilex', 'Demon Lords'),
            ('Kabriri', 'Kabriri', 'Demon Lords'),
            ('Kostchtchie', 'Kostchtchie', 'Demon Lords'),
            ('Mazmezz', 'Mazmezz', 'Demon Lords'),
            ('Mestama', 'Mestama', 'Demon Lords'),
            ('Nocticula', 'Nocticula', 'Demon Lords'),
            ('Nurgal', 'Nurgal', 'Demon Lords'),
            ('Orcus', 'Orcus', 'Demon Lords'),
            ('Pazuzu', 'Pazuzu', 'Demon Lords'),
        ]
    },
    19: {
        'first': 'Shax', 'last': 'Angradd',
        'entries': [
            ('Shax', 'Shax', 'Demon Lords'),
            ('Shivaska', 'Shivaska', 'Demon Lords'),
            ('Sifkesh', 'Sifkesh', 'Demon Lords'),
            ('Socothbenoth', 'Socothbenoth', 'Demon Lords'),
            ('Urxehl', 'Urxehl', 'Demon Lords'),
            ('Xoveron', 'Xoveron', 'Demon Lords'),
            ('Yhidothrus', 'Yhidothrus', 'Demon Lords'),
            ('Zevgavizeb', 'Zevgavizeb', 'Demon Lords'),
            ('Zura', 'Zura', 'Demon Lords'),
            ('Angradd', 'Angradd', 'Dwarven Deities'),
        ]
    },
    20: {
        'first': 'Folgrit', 'last': 'Magdh',
        'entries': [
            ('Folgrit', 'Folgrit', 'Dwarven Deities'),
            ('Grundinnar', 'Grundinnar', 'Dwarven Deities'),
            ('Bolka', 'Bolka', 'Dwarven Deities'),
            ('Trudd', 'Trudd', 'Dwarven Deities'),
            ('Dranngvit', 'Dranngvit', 'Dwarven Deities'),
            ('Kols', 'Kols', 'Dwarven Deities'),
            ('Magrim', 'Magrim', 'Dwarven Deities'),
            ('Droskar', 'Droskar', 'Dwarven Deities'),
            ('Imbrex', 'Imbrex', 'Eldest'),
            ('Magdh', 'Magdh', 'Eldest'),
        ]
    },
    21: {
        'first': 'Ng', 'last': 'Kelizandri',
        'entries': [
            ('Ng', 'Ng', 'Eldest'),
            ('Shyka', 'Shyka', 'Eldest'),
            ('The Lost Prince', 'The%20Lost%20Prince', 'Eldest'),
            ('Count Ranalc', 'Count%20Ranalc', 'Eldest'),
            ('The Lantern King', 'The%20Lantern%20King', 'Eldest'),
            ('The Green Mother', 'The%20Green%20Mother', 'Eldest'),
            ('Ragadahn', 'Ragadahn', 'Eldest'),
            ('Ayrzul', 'Ayrzul', 'Elemental Lords'),
            ('Hshurha', 'Hshurha', 'Elemental Lords'),
            ('Kelizandri', 'Kelizandri', 'Elemental Lords'),
        ]
    },
    22: {
        'first': 'Ymeri', 'last': 'Ghenshau',
        'entries': [
            ('Ymeri', 'Ymeri', 'Elemental Lords'),
            ('Yuelral', 'Yuelral', 'Elven Deities'),
            ('Findeladlara', 'Findeladlara', 'Elven Deities'),
            ('Ketephys', 'Ketephys', 'Elven Deities'),
            ('Andoletta', 'Andoletta', 'Empyreal Lords'),
            ('Arqueros', 'Arqueros', 'Empyreal Lords'),
            ('Damerrich', 'Damerrich', 'Empyreal Lords'),
            ('Eldas', 'Eldas', 'Empyreal Lords'),
            ('Falayna', 'Falayna', 'Empyreal Lords'),
            ('Ghenshau', 'Ghenshau', 'Empyreal Lords'),
        ]
    },
    23: {
        'first': 'Kelinahat', 'last': 'Vildeis',
        'entries': [
            ('Kelinahat', 'Kelinahat', 'Empyreal Lords'),
            ('Kroina', 'Kroina', 'Empyreal Lords'),
            ('Lymnieris', 'Lymnieris', 'Empyreal Lords'),
            ('Neshen', 'Neshen', 'Empyreal Lords'),
            ('Olheon', 'Olheon', 'Empyreal Lords'),
            ('Ragathiel', 'Ragathiel', 'Empyreal Lords'),
            ('Smiad', 'Smiad', 'Empyreal Lords'),
            ('Svarozic', 'Svarozic', 'Empyreal Lords'),
            ('Tanagaar', 'Tanagaar', 'Empyreal Lords'),
            ('Vildeis', 'Vildeis', 'Empyreal Lords'),
        ]
    },
    24: {
        'first': 'Winlas', 'last': 'Jaidz',
        'entries': [
            ('Winlas', 'Winlas', 'Empyreal Lords'),
            ('Zohls', 'Zohls', 'Empyreal Lords'),
            ('Arshea', 'Arshea', 'Empyreal Lords'),
            ('Benorus', 'Benorus', 'Empyreal Lords'),
            ('Bharnarol', 'Bharnarol', 'Empyreal Lords'),
            ('Dalenydra', 'Dalenydra', 'Empyreal Lords'),
            ('Eritrice', 'Eritrice', 'Empyreal Lords'),
            ('Halcamora', 'Halcamora', 'Empyreal Lords'),
            ('Irez', 'Irez', 'Empyreal Lords'),
            ('Jaidz', 'Jaidz', 'Empyreal Lords'),
        ]
    },
    25: {
        'first': 'Korada', 'last': 'Ylimancha',
        'entries': [
            ('Korada', 'Korada', 'Empyreal Lords'),
            ('Lorris', 'Lorris', 'Empyreal Lords'),
            ('Lythertida', 'Lythertida', 'Empyreal Lords'),
            ('Ondisso', 'Ondisso', 'Empyreal Lords'),
            ('Rowdrosh', 'Rowdrosh', 'Empyreal Lords'),
            ('Seramaydiel', 'Seramaydiel', 'Empyreal Lords'),
            ('Shei', 'Shei', 'Empyreal Lords'),
            ('Soralyon', 'Soralyon', 'Empyreal Lords'),
            ('Uskyeria', 'Uskyeria', 'Empyreal Lords'),
            ('Ylimancha', 'Ylimancha', 'Empyreal Lords'),
        ]
    },
    26: {
        'first': 'Ashava', 'last': 'Lalaci',
        'entries': [
            ('Ashava', 'Ashava', 'Empyreal Lords'),
            ('Black Butterfly', 'Black%20Butterfly', 'Empyreal Lords'),
            ('Cernunnos', 'Cernunnos', 'Empyreal Lords'),
            ('Chadali', 'Chadali', 'Empyreal Lords'),
            ('Chucaro', 'Chucaro', 'Empyreal Lords'),
            ('Hembad', 'Hembad', 'Empyreal Lords'),
            ('Immonhiel', 'Immonhiel', 'Empyreal Lords'),
            ('Jalaijatali', 'Jalaijatali', 'Empyreal Lords'),
            ('Keltheald', 'Keltheald', 'Empyreal Lords'),
            ('Lalaci', 'Lalaci', 'Empyreal Lords'),
        ]
    },
    27: {
        'first': 'Marishi', 'last': 'Skode',
        'entries': [
            ('Marishi', 'Marishi', 'Empyreal Lords'),
            ('Picoperi', 'Picoperi', 'Empyreal Lords'),
            ('Pulura', 'Pulura', 'Empyreal Lords'),
            ('Reymenda', 'Reymenda', 'Empyreal Lords'),
            ('Sinashakti', 'Sinashakti', 'Empyreal Lords'),
            ('Thisamet', 'Thisamet', 'Empyreal Lords'),
            ('Tolc', 'Tolc', 'Empyreal Lords'),
            ('Valani', 'Valani', 'Empyreal Lords'),
            ('Aegirran', 'Aegirran', 'Giant Deities'),
            ('Bergelmir', 'Bergelmir', 'Giant Deities'),
            ('Skode', 'Skode', 'Giant Deities'),
        ]
    },
}

BASE_URL = 'https://www.aonprd.com/DeityDisplay.aspx?ItemName='

def var_name_for(name, batch_num):
    """Generate a camelCase variable name, handling known conflicts."""
    raw = re.sub(r'^(Demon Lord|Archdevil|Asura Rana|Empyreal Lord|Daemon Harbinger|Elemental Lord),\s*', '', name, flags=re.IGNORECASE)
    vn = to_camel(raw)
    # Avoid conflict with hand-authored files: iomedae and milani
    if vn == 'iomedae':
        vn = 'iomedaeBatch'
    if vn == 'milani':
        vn = 'milaniBatch'
    return vn

def run_batch(batch_num):
    batch = BATCHES[batch_num]
    entries = batch['entries']
    n = f'{batch_num:03d}'
    out_path = f'src/data/deities/raw/deities_batch_{n}.ts'

    print(f'=== Batch {n}: {len(entries)} entries ===')

    results = []
    failed = []

    for (name, url_encoded, pantheon) in entries:
        url1 = BASE_URL + url_encoded
        url2 = BASE_URL + urllib.parse.quote(name)

        print(f'  Fetching: {name}')
        html_content = fetch(url1)

        if not html_content or 'Areas of Concern' not in html_content:
            # Try fallback URL
            if url1 != url2:
                print(f'    Trying fallback URL...')
                html_content = fetch(url2)

        if not html_content or 'Areas of Concern' not in html_content:
            print(f'    FAILED: {name}')
            failed.append((name, url1, url2))
            results.append(('stub', name, pantheon, url1, url2))
        else:
            deity = parse_deity_page(html_content, name, pantheon)
            if deity:
                print(f'    OK: {name} ({deity.get("alignment","?")}), boons={("yes" if "boons" in deity else "no")}')
                results.append(('ok', deity))
            else:
                print(f'    PARSE FAILED: {name}')
                failed.append((name, url1, url2))
                results.append(('stub', name, pantheon, url1, url2))

        time.sleep(0.5)  # be polite

    # Build TypeScript file
    var_names = []
    ts_parts = []

    # Checkpoint comment
    first_name = batch['first']
    last_name = batch['last']
    count = len(entries)
    failed_note = ''
    if failed:
        failed_note = ' | FAILED: ' + ', '.join(f[0] for f in failed)
    checkpoint = f"// Batch {n} | first: '{first_name}' | last: '{last_name}' | count: {count}{failed_note}"

    ts_parts.append(checkpoint)
    ts_parts.append("import { DeityEntry } from '@/types/deities';")
    ts_parts.append("")

    for item in results:
        if item[0] == 'ok':
            deity = item[1]
            vn = var_name_for(deity['name'], batch_num)
            var_names.append(vn)
            ts_parts.append(deity_to_ts(deity, vn))
            ts_parts.append("")
        else:
            _, name, pantheon, url1, url2 = item
            vn = var_name_for(name, batch_num)
            var_names.append(vn)
            ts_parts.append(stub_deity(name, vn, pantheon, url1, url2))
            ts_parts.append("")

    ts_parts.append(f"export const batch_{n}: DeityEntry[] = [{', '.join(var_names)}];")

    content = '\n'.join(ts_parts)

    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f'\nWrote {out_path}')
    if failed:
        print(f'FAILED entries: {[f[0] for f in failed]}')
    else:
        print('All entries OK')
    return len(failed)

# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Usage: python3 scripts/scrape_deity.py <batch_num_or_all>')
        sys.exit(1)

    arg = sys.argv[1]
    if arg == 'all':
        total_failed = 0
        for bn in sorted(BATCHES.keys()):
            out = f'src/data/deities/raw/deities_batch_{bn:03d}.ts'
            import os
            if os.path.exists(out):
                # Check checkpoint
                with open(out) as f:
                    first_line = f.readline()
                if f'Batch {bn:03d}' in first_line:
                    print(f'Skipping batch {bn:03d} — already done')
                    continue
            total_failed += run_batch(bn)
        print(f'\n=== DONE: total PAGE_FETCH_FAILED = {total_failed} ===')
    else:
        run_batch(int(arg))
