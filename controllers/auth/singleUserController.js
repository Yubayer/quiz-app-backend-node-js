const userModel = require('../../models/userModel')

const singleUserController = async (req, res) => {
    try {
        const { id } = req.params
        const user = await userModel.findOne({ _id: id })
        .populate({
            path: 'quiz'
          })
          .exec()
        res.json(user)
    }
    catch{
        res.json({
            message: "error occoured"
        })
    }
}

module.exports = singleUserController