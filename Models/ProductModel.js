var mongoose = require('mongoose')
const Product = new mongoose.Schema({
    name: String,
    image: String,
    slug: String,
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Product', Product);