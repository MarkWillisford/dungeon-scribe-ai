# Generated class feature effects apply to the sheet while still marked needs_review

Only 49 of 6,239 seeded class features carry `effects`; 1,112 more promise a numeric bonus in their prose and deliver nothing. Hand-authoring that backlog is open-ended, and the classes a given player needs are rarely the ones a popularity-ordered queue reaches first — Kah-Mei's Spiritualist and Warder among them.

Effects are therefore generated from the feature's own description, seeded with `verificationStatus: 'needs_review'`, and **applied to the character sheet immediately**, with the stat breakdown marking the contribution unverified. The alternative — withholding unverified effects — keeps a wrong number out of the sheet only by leaving the sheet wrong in the way #362 already describes, and it makes every character wait on a 1,112-entry human review.

This is deliberate and will look wrong to a reader who expects machine-generated rules data to be gated behind human approval. The justification is that both options can produce an incorrect stat, and only one of them shows its working: an applied-but-unverified bonus is visible and traceable in the breakdown, whereas a withheld one is indistinguishable from a feature that grants nothing. Verification then follows real usage rather than a queue — players check the features their own characters use.

## Consequences

- `verificationStatus` becomes load-bearing in the UI, not just an admin field: the breakdown must distinguish verified from generated contributions or this decision is unsafe.
- A generation error reaches characters before a human sees it. Acceptable for a bonus that is visibly labelled; it would not be acceptable for anything destructive or irreversible.
- Verification effort concentrates on played classes automatically, which is the opposite of the coverage order a manual backlog would produce.
