const userModel = require('../../models/userModel')

const registerMiddlware = async (req, res, next) => {
    const { name, email, password } = req.body

    if (name === '' || email === '' || password === '') {
        res.status(500).send("Please Fill all the fields")
    } else {

        const user = await userModel.findOne({ email: email }).exec()
        try {
            if (user) res.status(500).send("This Email already axists")
            else next()
        } catch (err) {
            res.status(500).send("Internal Error occoured")
        }
    }
}

module.exports = registerMiddlware