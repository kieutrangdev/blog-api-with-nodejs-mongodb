const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: [true, 'Post is required']
    },
  
    title: {
        type: String,
        require: [true, 'Category is required']
    },
},
    {
        timestamps: true
    }
)

// compile the Category model
const Category = mongoose.model('Category', categorySchema)

module.exports = Category;