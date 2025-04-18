const API_BASE = 'http://localhost:3001/api' // Assuming your backend runs on port 3001

export const getTopUsers = async () => {
  const response = await fetch(`${API_BASE}/top-users`)
  if (!response.ok) throw new Error('Failed to fetch top users')
  return await response.json()
}

export const getTrendingPosts = async () => {
  const response = await fetch(`${API_BASE}/trending-posts`)
  if (!response.ok) throw new Error('Failed to fetch trending posts')
  return await response.json()
}

export const getFeed = async () => {
  const response = await fetch(`${API_BASE}/feed`)
  if (!response.ok) throw new Error('Failed to fetch feed')
  return await response.json()
}