const { 
    generateUsers,
    generatePosts,
    updateFeed
  } = require('../models/dataGenerator')
  
  // Initialize data
  let users = generateUsers(20)
  let posts = generatePosts(50, users)
  let feed = [...posts].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
  
  // Update feed every 5 seconds
  setInterval(() => {
    const newPosts = generatePosts(2, users)
    posts.push(...newPosts)
    feed = [...newPosts, ...feed].slice(0, 50)
  }, 5000)
  
  exports.getTopUsers = (req, res) => {
    try {
      // Sort users by post count and get top 5
      const topUsers = [...users]
        .sort((a, b) => b.posts - a.posts)
        .slice(0, 5)
        .map(user => ({
          id: user.id,
          name: user.name,
          username: user.username,
          image: `https://i.pravatar.cc/150?img=${user.id}`,
          posts: user.posts
        }))
      
      res.json(topUsers)
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch top users' })
    }
  }
  
  exports.getTrendingPosts = (req, res) => {
    try {
      if (posts.length === 0) {
        return res.json([])
      }
  
      // Find max comments count
      const maxComments = Math.max(...posts.map(post => post.comments))
      
      // Get all posts with max comments
      const trendingPosts = posts
        .filter(post => post.comments === maxComments)
        .map(post => ({
          id: post.id,
          userId: post.userId,
          author: users.find(u => u.id === post.userId).name,
          title: post.title,
          content: post.content,
          comments: post.comments,
          likes: post.likes,
          timestamp: post.timestamp
        }))
      
      res.json(trendingPosts)
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch trending posts' })
    }
  }
  
  exports.getFeed = (req, res) => {
    try {
      const feedData = feed.map(post => ({
        id: post.id,
        userId: post.userId,
        author: users.find(u => u.id === post.userId).name,
        authorImage: `https://i.pravatar.cc/150?img=${post.userId}`,
        title: post.title,
        content: post.content,
        comments: post.comments,
        likes: post.likes,
        time: formatTimeAgo(post.timestamp)
      }))
      
      res.json(feedData)
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch feed' })
    }
  }
  
  function formatTimeAgo(timestamp) {
    const now = new Date()
    const postTime = new Date(timestamp)
    const diffInSeconds = Math.floor((now - postTime) / 1000)
    
    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
    return `${Math.floor(diffInSeconds / 86400)} days ago`
  }