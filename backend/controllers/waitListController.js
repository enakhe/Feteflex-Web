const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const WaitList = require('../models/waitListModel')


// @description Create users
// @route POST /api/users
// @access Public
const addWaitList = asyncHandler(async (req, res) => {
    // Destructure fields
    const { fullName, email, phoneNumber, serviceCategory } = req.body;

    // Validation
    if (!fullName || !email || !phoneNumber || !serviceCategory) {
        res.status(404);
        throw new Error('Please add all required fields');
    };

    // Create a user
    const waitList = await WaitList.create({
        fullName, email, phoneNumber, serviceCategory
    });

    // Validate Creation
    if (waitList) {
        res.status(201).json({
            _id: waitList.id,
            fullName: waitList.name,
            email: waitList.email,
            phoneNumber: waitList.phoneNumber,
            serviceCategory: waitList.serviceCategory,
            token: generateToken(waitList._id)
        });
    } else {
        res.status(400);
        throw new Error(`Invalid data`);
    };
});

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

module.exports = {
    addWaitList
}