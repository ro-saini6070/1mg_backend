var mongoose = require('mongoose')

const Category = new mongoose.Schema({
    name: String,
    image: String,
    slug: String,
    createAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Category', Category)


