const Search = require('./../Controllers/SearchController')
module.exports = function (app) {
    app.post('/search', Search.search);
    app.get('/historical-searches', Search.historicalSearchData);
}
