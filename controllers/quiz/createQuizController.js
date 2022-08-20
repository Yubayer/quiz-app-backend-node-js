const quizModel = require('../../models/quizModel')
const userModel = require('../../models/userModel')

const createQuizController = async (req, res) => {
    try {
        const { name, userId } = req.body
        const newQuiz = {
            name, user: userId
        }
        const quiz = new quizModel(newQuiz)

        await quiz.save();

        await userModel.findOneAndUpdate(
            { _id: userId },
            { $push: { quiz: quiz._id } },
            { returnNewDocument: true }
        )

        res.json({
            name, userId, quiz
        })
    }
    catch {
        res.json({
            message: "error occoured in create quiz controller"
        })
    }
}

module.exports = createQuizController