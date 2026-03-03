export const API_BASE = 'http://localhost:3000'

export async function apiPost(path: string, body: any) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(body)
  })
  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(data?.message || 'Erro de requisição')
  }
  return res.json()
}

export async function apiGet(path: string) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'GET',
    credentials: 'include'
  })
  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(data?.message || 'Erro de requisição')
  }
  return res.json()
}
