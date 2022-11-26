const mongoose = require('mongoose')

const postShema = new mongoose.Schema({
    title: {
        type:String,
        require: [true, 'Post Title is required'],
        trim: true
    },
    description: {
        type: String,
        require: [true, 'Post description is required']
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        require: [true, 'Category is required']
    },
    numViews: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    likes: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    disLikes: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    user: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: [true, "Please author is required"]
        }
    ],
    photo: {
        type: String,
        require:[true, "Post image is required"]
    },
},
    {
        timestamps: true
    }

)

// compile the post model
const User = mongoose.model('Post', postShema)

module.exports = Post;