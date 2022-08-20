const express = require('express')
const questionRouter = express.Router()

const allQuestionController = require('../controllers/question/allQuestionController')
const createQuestionController = require('../controllers/question/createQuestionController')
const questionController = require('../controllers/question/questionController')

questionRouter.get('/all', allQuestionController)
questionRouter.post('/create', createQuestionController)
questionRouter.get('/:id', questionController)

module.exports = questionRouter