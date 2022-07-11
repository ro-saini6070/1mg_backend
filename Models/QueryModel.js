var mongoose = require('mongoose')

const Query = new mongoose.Schema({
    name: String,
    createAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Query', Query);