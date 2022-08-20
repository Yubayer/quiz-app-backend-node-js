const userModel = require('../../models/userModel')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10);

const registerController = async (request, response) => {
    try {
        const { name, email, password } = request.body
        const hashPassword = bcrypt.hashSync(password, salt);
        const newUser = {
            name, email, password: hashPassword
        }
        const user = new userModel(newUser);

        await user.save();
        response.json(user);
    } catch (error) {
        response.status(500).send(error);
    }
}

module.exports = registerController