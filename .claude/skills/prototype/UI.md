# UI Prototype

Generate **several radically different UI variations** on a single route, switchable from a floating bottom bar. The user flips between variants in the browser, picks one (or steals bits from each), then throws the rest away.

If the question is about logic/state rather than what something looks like — wrong branch. Use [LOGIC.md](LOGIC.md).

## When this is the right shape

- "What should this page look like?"
- "I want to see a few options for this dashboard before committing."
- "Try a different layout for the settings screen."
- Any time the user would otherwise spend a day picking between three vague mockups in their head.

## Two sub-shapes — strongly prefer sub-shape A

A UI prototype is much easier to judge when it's **butting up against the rest of the app** — real header, real sidebar, real data, real density. A throwaway route on its own is a vacuum: every variant looks fine in isolation. Default to sub-shape A whenever there's a plausible existing page to host the variants. Only reach for sub-shape B if the prototype genuinely has no nearby home.

### Sub-shape A — adjustment to an existing page (preferred)

The route already exists. Variants are rendered **on the same route**, gated by a `?variant=` URL search param. The existing data fetching, params, and auth all stay — only the rendering swaps. This is the default; pick it unless there's a specific reason not to.

### Sub-shape B — a new page (last resort)

Only use this when the thing being prototyped genuinely has no existing page to live inside — e.g. an entirely new top-level surface, or a flow that can't be embedded anywhere sensible.

Create a **throwaway route** following whatever routing convention the project already uses. Name it so it's obviously a prototype (e.g. include the word `prototype` in the path or filename). Same `?variant=` pattern.

Before committing to sub-shape B, sanity-check: is there really no existing page this could be embedded in?

## Process

### 1. State the question and pick N

Default to **3 variants**. More than 5 stops being radically different and starts being noise — cap there.

### 2. Generate radically different variants

Variants must be **structurally different** — different layout, different information hierarchy, different primary affordance, not just different colours. Three slightly-tweaked card grids isn't a UI prototype, it's wallpaper.

### 3. Wire them together

```tsx
// pseudo-code — adapt to the project's framework
const variant = searchParams.get('variant') ?? 'A';
return (
  <>
    {variant === 'A' && <VariantA {...data} />}
    {variant === 'B' && <VariantB {...data} />}
    {variant === 'C' && <VariantC {...data} />}
    <PrototypeSwitcher variants={['A', 'B', 'C']} current={variant} />
  </>
);
```

### 4. Build the floating switcher

A small fixed-position bar at the bottom-centre of the screen:

- **Left/right arrows** — cycle variants (wrap around)
- **Variant label** — shows current variant key and name if exported
- Updates URL search param so variants are shareable and reload-stable
- Keyboard: `←` and `→` arrow keys also cycle
- Hidden in production builds — gate on `process.env.NODE_ENV !== 'production'`

### 5. Hand it over

Surface the URL and the `?variant=` keys. Common feedback: "I want the header from B with the sidebar from C" — that's the actual design.

### 6. Capture the answer and clean up

Once a variant wins, record which one and why (commit message, ADR, issue, or `NOTES.md`). Then:

- **Sub-shape A** — delete losing variants and the switcher; fold winner into existing page.
- **Sub-shape B** — promote winning variant to a real route, delete the throwaway route and switcher.

## Anti-patterns

- **Variants that differ only in colour or copy.** That's a tweak, not a prototype.
- **Sharing too much code between variants.** Each variant should be free to throw out the layout.
- **Wiring variants to real mutations.** Keep prototypes read-only; point mutations at a stub.
- **Promoting the prototype directly to production.** Rewrite properly when folding in — prototype code was written under no-tests, minimal-error-handling constraints.
