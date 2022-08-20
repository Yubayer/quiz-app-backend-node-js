const userModel = require('../../models/userModel')
const bcrypt = require('bcryptjs')

const loginMiddlware = async (req, res, next) => {
    const { email, password } = req.body

    if (email === '' || password === '') {
        res.status(500).send("Please Fill all the fields from middleware")
    } else {
        const user = await userModel.findOne({ email: email }).exec()
        try {
            if (user) {
                if (bcrypt.compareSync(password, user.password)) {
                    next()
                } else {
                    res.json({
                        statusCode: 500,
                        message: "Bad Credentials from middleware"
                    })
                }
            } else {
                res.json({
                    statusCode: 500,
                    message: "User Not Found from middleware"
                })
            }
        } catch (err) {
            res.send("Internal Error occoured from middleware")
        }
    }
}

module.exports = loginMiddlware