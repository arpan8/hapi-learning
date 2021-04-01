const User = require('../models').user;
exports.showalluserHandler = async (request, h) => {
    try {
        const users = await User.findAll({
            attributes: ['id','first_name','last_name','email','mobile_no']
        });
        return { 
            message: users.length > 0 ? users : 'List is empty' 
        }
    } catch (error) {
        return h.response({ error: error.message }).code(400)
    }
}

exports.createuserHandler = async (request, h) => {
    try {
        var email_exists = await User.findOne({
            where: {
                email: request.payload.email
            }
        });
        if(email_exists){
            return {
                message: 'Email exists'
            }
        }
        var mobile_no_exists = await User.findOne({
            where: {
                mobile_no: request.payload.mobile_no
            }
        });
        if(mobile_no_exists){
            return {
                message: 'Mobile number exists'
            }
        }
        await User.create({
                first_name: request.payload.first_name,
                last_name: request.payload.last_name,
                password: request.payload.password,
                email: request.payload.email,
                mobile_no: request.payload.mobile_no
        })
        return {
            //create: create[1] ? true : 'User already registered',
            message: 'User is created'
        }
    } catch (error) {
        return h.response({ error: error.message }).code(400)
    }
}