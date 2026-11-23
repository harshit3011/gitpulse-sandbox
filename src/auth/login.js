export function login(user, password) {
  if (!user || !password) return null
  return { user, ok: true }
}
