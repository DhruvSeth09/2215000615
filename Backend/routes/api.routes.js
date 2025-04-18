const express = require('express')
const router = express.Router()
const {
  getTopUsers,
  getTrendingPosts,
  getFeed
} = require('../controllers/analytics.controllers')

router.get('/top-users', getTopUsers)
router.get('/trending-posts', getTrendingPosts)
router.get('/feed', getFeed)

module.exports = router