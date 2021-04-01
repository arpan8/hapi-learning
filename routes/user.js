const { showalluserHandler, createuserHandler } = require('../controllers/user');

const router = [
    {
        method: 'get', 
        path: '/all/users', 
        handler: showalluserHandler
    },
    {
        method: 'post', 
        path: '/create/user', 
        handler: createuserHandler
    },
    
]


module.exports = router;