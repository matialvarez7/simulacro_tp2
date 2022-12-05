const {Category, Channel} = require('../../db/models');

async function allCategories(){
    return await Category.findAll({
        attributes: {

            exclude:['createdAt', 'updatedAt']
        }
    })
}

async function channelsByCategory(id){
    return await Category.findOne({
        where: {id},
        include: Channel
    })
}

module.exports = {
    allCategories,
    channelsByCategory
}