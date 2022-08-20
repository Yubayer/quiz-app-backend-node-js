const { model } = require('mongoose');
const userModel = require('../../models/userModel')

const userController = async (request, response) => {
    const users = await userModel.find({});

    try {
        response.json(users);
    } catch (error) {
        response.status(500)
    }
}

module.exports = userController