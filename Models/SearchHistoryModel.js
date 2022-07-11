var mongoose = require('mongoose')
const SearchHistory = new mongoose.Schema({
    name: String,
    createAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('SearchHistory', SearchHistory, 'search_histories');