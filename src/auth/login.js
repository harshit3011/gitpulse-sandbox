export function login(user, password) {
  if (!user) return null
  return { user, ok: password.length > 0 }
}
