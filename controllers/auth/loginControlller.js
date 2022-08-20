const userModel = require('../../models/userModel')
const jwt = require('jsonwebtoken')

const loginController = async (req, res) => {
    const { email } = req.body
    const user = await userModel.findOne({ email: email }).exec()
    try {
        if (user) {
            const xuser = { name: user.name, email: user.email }
            const expire = { expiresIn: 60 * 20 } // hash will expire after 20 mins
            const token = jwt.sign(
                xuser,
                process.env.TOKEN_KEY,
                expire
            )

            res.json({ token, name: user.name, email: user.email })

        } else res.json({
            statusCode: 500,
            message: "Bad Credentials from controller"
        })
    } catch (error) {
        res.json({
            statusCode: 500,
            message: "Bad Credentials from controller 500"
        })
    }
}


module.exports = loginController