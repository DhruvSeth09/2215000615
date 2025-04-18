const { faker } = require('@faker-js/faker')

// Generate mock users
exports.generateUsers = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: faker.person.fullName(),
    username: faker.internet.userName(),
    posts: Math.floor(Math.random() * 100) + 1,
    followers: Math.floor(Math.random() * 1000) + 1
  }))
}

// Generate mock posts
exports.generatePosts = (count, users) => {
  return Array.from({ length: count }, (_, i) => {
    const userId = Math.floor(Math.random() * users.length) + 1
    return {
      id: Date.now() + i,
      userId,
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      comments: Math.floor(Math.random() * 50),
      likes: Math.floor(Math.random() * 200),
      timestamp: faker.date.recent({ days: 7 }).toISOString()
    }
  })
}

// Simulate feed updates
exports.updateFeed = (posts, newPosts) => {
  return [...newPosts, ...posts].slice(0, 50)
}