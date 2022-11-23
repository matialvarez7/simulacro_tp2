const {Category} = require('../../db/models');

async function allCategories(){
    return await Category.findAll({
        attributes: {

            exclude:['createdAt', 'updatedAt']
        }
    })
}

module.exports = {
    allCategories
}