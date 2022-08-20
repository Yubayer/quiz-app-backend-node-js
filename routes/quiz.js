const express = require('express')
const quizRouter = express.Router()

const quizController = require('../controllers/quiz/quizController')
const allQuizController = require('../controllers/quiz/allQuizController')
const createQuizController = require('../controllers/quiz/createQuizController')

quizRouter.get('/all', allQuizController)
quizRouter.post('/create', createQuizController)
quizRouter.get('/:id', quizController)

module.exports = quizRouter