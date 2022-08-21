const quizModel = require('../../models/quizModel')

const quizController = async (req, res) => {
    try {
        const { id } = req.params
        const quiz = await quizModel.findOne({_id: id})
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

        res.json(quiz)
    }
    catch (err) {
        res.json({
            message: "error occoured on single quiz controller"
        })
    }
}

module.exports = quizController