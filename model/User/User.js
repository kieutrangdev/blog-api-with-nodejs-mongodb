const mongoose = require('mongoose')

// create schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is require']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is require']
    },
    profilePhoto: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'Email is require']
    },
    password: {
        type: String,
        required: [true, 'Password is require']
    },
    postCount: {
        type: Number,
        default: 0
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: String,
        default: false
    },
    role: {
        type: String,
        enum: ['Admin','Guest','Editor']
    },
    viewedBy:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    followers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    following:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    active: {
        type:Boolean,
        default: true
    },
    posts: [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Post" 
        }
    ]

}, {
    timestamps: true
})

// compile the user model
const User = mongoose.model('User', userSchema)

module.exports = User