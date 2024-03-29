const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const WaitList = require('../models/waitListModel');

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];

            // Verify the token
            const deconded = jwt.verify(token, process.env.JWT_SECRET);

            // Get user form the token
            req.waitlist = await WaitList.findById(deconded.id);

            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error(`Not authorized`);
        }
    }

    if (!token) {
        res.status(401);
        throw new Error(`Not authorized`);
    }
});


module.exports = protect;