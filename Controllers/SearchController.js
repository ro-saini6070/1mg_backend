const SearchHistoryModel = require('../Models/SearchHistoryModel')
const Category = require('./../Models/CategoryModel')

/**
 * search data from products, category ,history simultaneously
 * @param {*} req 
 * @param {*} res 
 */
exports.search = async (req, res) => {
    //search data from products, category ,history simultaneously
}

/**
 * search history based on previous serches.
 * @todo search history accodring to the user id
 * @param {*} req 
 * @param {*} res 
 */
exports.historicalSearchData = async (req, res) => {
    SearchHistoryModel.find(function (err, data) {
        if (!data) {
            return res.send({ status: 0, message: "No search hostory found" })
        }
        return res.send({ status: 1, data: data })
    })
}