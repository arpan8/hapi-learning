const Category = require('../models').category;

exports.categoryList = async(request, h)=>{
    try {
        var categoryList = await Category.findAll({
            attributes: ['id','name']
        });
        return {
            message: categoryList.length > 0 ? categoryList : 'List is empty'
        }  
    } catch (error) {
        return h.response({ error: error.message }).code(400)
    }
}

exports.createCategory = async(request, h)=>{
    try {
        var create = await Category.findOrCreate({
            where: {
                name: request.payload.name
            }
        });
        return {
            message: create[1] ? 'Category is created' : 'Category exists'
        }
    } catch (error) {
        return h.response({ error: error.message }).code(400)
    }
}

