const questionModel = require('../../models/questionModel')
const userModel = require('../../models/userModel')
const quizModel = require("../../models/quizModel")

const createQuestionController = async (req, res) => {
    try {
        const { mark, options, userId, quizId, question } = req.body
        const questionObject = {
            mark,
            user: userId,
            quiz: quizId,
            options: options,
            question
        }

        const newQuestion = new questionModel(questionObject)
        await newQuestion.save()

        await userModel.findOneAndUpdate(
            { _id: userId },
            { $push: { question: newQuestion._id } },
            { returnNewDocument: true }
        )

        await quizModel.findOneAndUpdate(
            { _id: quizId },
            { $push: { question: newQuestion._id } },
            { returnNewDocument: true }
        )

        res.json(newQuestion)
    }
    catch {
        res.json({
            message: "error occoured from create question controller"
        })
    }
}

module.exports = createQuestionController