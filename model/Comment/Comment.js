const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        require: [true, 'Post is required']
    },
    user: {
        type: Object,
        require: [true, 'User is required']
    },
    description: {
        type: String,
        require: [true, 'Category is required']
    },
},
    {
        timestamps: true
    }
)

// compile the Comment model
const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment;