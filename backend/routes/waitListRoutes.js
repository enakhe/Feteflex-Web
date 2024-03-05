const express = require('express');
const router = express.Router();
const { addWaitList } = require('../controllers/waitListController');
const protect = require('../middleware/authMiddleware');

// Add Waitlist route [POST]
router.post('/', addWaitList);

module.exports = router