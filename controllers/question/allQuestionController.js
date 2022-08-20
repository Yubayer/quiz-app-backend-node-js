
const questionModel = require('../../models/questionModel')
const allQuestionController = async (req, res) => {
    try {
        const quiz = await questionModel.find({})
            .populate({
                path: 'quiz',
                select: ['name']
            })
            .populate({
                path: 'user',
                select: ['name', 'email']
            })
            .exec()

        res.json({
            quiz
        })
    }
    catch (err) {
        res.json({
            message: "error occoured on all quiz controller"
        })
    }
}

module.exports = allQuestionController