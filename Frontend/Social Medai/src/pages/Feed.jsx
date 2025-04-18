
import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'
import { getFeed } from '../utils/api'

export default function Feed() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null)
        const data = await getFeed()
        setPosts(data)
      } catch (err) {
        setError('NETWORK CONNECTION FAILED')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
    const interval = setInterval(fetchPosts, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tighter">
          LIVE DATA STREAM
        </h1>
        <div className="flex items-center space-x-2">
          <span className="pulse-dot"></span>
          <span className="text-sm font-mono text-red-400">LIVE</span>
        </div>
      </div>
      
      {error && (
        <div className="cyber-card p-4 mb-6 border-l-4 border-red-500">
          <div className="flex items-center">
            <svg className="h-6 w-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="font-mono text-red-400">{error}</span>
          </div>
        </div>
      )}

      {loading ? (
        <div className="space-y-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="cyber-card p-5">
              <div className="animate-pulse space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-[#333] h-12 w-12"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-[#333] rounded w-1/3"></div>
                    <div className="h-3 bg-[#333] rounded w-1/4"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-5 bg-[#333] rounded w-3/4"></div>
                  <div className="h-4 bg-[#333] rounded"></div>
                  <div className="h-4 bg-[#333] rounded w-5/6"></div>
                </div>
                <div className="flex space-x-6 pt-4">
                  <div className="h-4 bg-[#333] rounded w-16"></div>
                  <div className="h-4 bg-[#333] rounded w-16"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="cyber-card p-8 text-center">
          <svg className="mx-auto h-16 w-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-4 text-xl font-bold text-white">NO SIGNAL DETECTED</h3>
          <p className="mt-2 text-gray-400 font-mono">AWAITING DATA TRANSMISSION...</p>
          <button className="cyber-btn mt-6">
            INITIATE MANUAL REFRESH
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}