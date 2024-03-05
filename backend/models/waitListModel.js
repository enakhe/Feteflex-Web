const mongoose = require('mongoose');

const WaitListShema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Please add a fullname field']
    },

    email: {
        type: String,
        required: [true, 'Please add a email field'],
    }, 

    phoneNumber: {
        type: String,
        required: [true, 'Please add a phone number field'],
    },

    serviceCategory: {
        type: String,
        required: [true, 'Please add a category field'],
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('WaitList', WaitListShema);