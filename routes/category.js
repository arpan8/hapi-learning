const { categoryList, createCategory } = require('../controllers/category');

const router = [
    {
        method: 'get',
        path: '/all/categories',
        handler: categoryList
    },{
        method: 'post',
        path: '/create/category',
        handler: createCategory
    }
]

module.exports = router;