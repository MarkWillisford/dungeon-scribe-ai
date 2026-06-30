/**
 * Helpers for the "type the character's name to confirm deletion" safeguard.
 *
 * Kept pure (no React/RN imports) so the matching rule can be unit-tested in
 * isolation and reused by any confirm UI.
 */

/**
 * Returns true when the user-typed text confirms deletion of a character with
 * the given name.
 *
 * Matching is forgiving on surrounding whitespace and letter case so a correct
 * name isn't rejected over a stray space or capitalization, while still
 * requiring the user to deliberately retype the name. An empty or
 * whitespace-only target name can never be confirmed.
 */
export function isDeleteConfirmationValid(typed: string, characterName: string): boolean {
  const target = characterName.trim().toLowerCase();
  if (target.length === 0) {
    return false;
  }
  return typed.trim().toLowerCase() === target;
}
