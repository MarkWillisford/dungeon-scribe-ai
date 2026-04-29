// React Native doesn't ship crypto.randomUUID; this is good enough for
// local draft-scoped instance IDs.
export function makeCompanionInstanceId(): string {
  return `comp-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
