# Equipment-granted feats are stored on the item, not injected into the character feat list

When an equipped magic item grants a feat (e.g. a ring granting Weapon Focus), we considered injecting a synthetic `CharacterFeat` entry into `character.feats.feats` with a source annotation so it would flow through the existing feat pipeline automatically. We rejected this because slot-change reducers (`assignEquipmentSlot`, `unassignEquipmentSlot`, `reequipFromContainer`, `removeEquipment`) would each need to find and clean up injected feats on every equipment mutation — spreading fragile cleanup logic across six reducers. A source-convention approach (`source: 'item:...'`) would also silently inflate the HD-based feat count unless every consumer filtered by source.

Instead, equipment-granted feats are stored as `GrantedFeat[]` on the item (`{featId, choices?, active?}`). The modifier pipeline collects their effects at compute time by looking up each feat in `FeatRegistryService`, with slot/isOrbiting gating matching the rest of equipment effect collection. `character.feats.feats` remains exclusively user-chosen feats.

## Considered Options

**Rejected: inject into `character.feats.feats`** — reuses the existing feat pipeline and choice UI without new infrastructure, but requires cleanup logic in every equipment reducer and pollutes the HD-based feat count.

**Accepted: `GrantedFeat[]` on the item** — pipeline collects effects at compute time; no cleanup burden; `character.feats.feats` stays clean. Choice UI is triggered at grant time in the equipment editor using the same choice prompt as the standard feat add flow.
