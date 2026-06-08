const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5080/api'

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(text || `Request failed: ${response.status}`)
  }

  if (response.status === 204) return null
  return response.json()
}

export const api = {
  getServices: () => request('/services'),
  getPrices: () => request('/prices'),
  getStoreSettings: () => request('/store-settings'),
  createBooking: (payload) => request('/bookings', { method: 'POST', body: JSON.stringify(payload) }),
}
