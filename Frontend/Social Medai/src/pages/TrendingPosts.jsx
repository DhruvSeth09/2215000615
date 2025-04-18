import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'
import { getTrendingPosts } from '../utils/api'

export default function TrendingPosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      try {
        const data = await getTrendingPosts()
        setPosts(data)
      } catch (error) {
        console.error('Error fetching trending posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTrendingPosts()
  }, [])

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Trending Posts</h1>
      
      {loading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white p-5 rounded-lg shadow animate-pulse h-32"></div>
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <p className="text-gray-500">No trending posts found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map(post => (
            <PostCard key={post.id} post={post} isTrending={true} />
          ))}
        </div>
      )}
    </div>
  )
}