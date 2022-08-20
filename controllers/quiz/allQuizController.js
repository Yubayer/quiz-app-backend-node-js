const quizModel = require('../../models/quizModel')

const allQuizController = async (req, res) => {
    try {
        const quiz = await quizModel.find({})
            .populate({
                path: 'question',
                populate: {
                    path: 'user',
                    select: ['name', 'email']
                }
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

module.exports = allQuizController