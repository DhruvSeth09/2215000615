import { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import { getTopUsers } from '../utils/api'

export default function TopUsers() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTopUsers = async () => {
      try {
        const data = await getTopUsers()
        setUsers(data.slice(0, 5)) // Get top 5 users
      } catch (error) {
        console.error('Error fetching top users:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTopUsers()
  }, [])

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Top Users</h1>
      
      {loading ? (
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow animate-pulse h-20"></div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {users.map((user, index) => (
            <UserCard key={user.id} user={user} rank={index + 1} />
          ))}
        </div>
      )}
    </div>
  )
}