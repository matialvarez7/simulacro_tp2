const {Category} = require('../../db/models');

async function allCategories(){
    return await Category.findAll()
}

module.exports = {
    allCategories
}