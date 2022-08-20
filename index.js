const express = require('express')
const app = express()
const port = 8000
app.use(express.json());
require('dotenv').config()

const mongoose = require("mongoose");
const dbname = "quiz";
mongoose.connect(
    "mongodb://localhost:27017",
    {
        dbName: dbname,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => err ? console.log(err) : console.log(`Connected to ${dbname} database`)
);


const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const userRouter = require('./routes/route')
const quizRouter = require('./routes/quiz')
const questionRouter = require('./routes/question')


app.get('/', (req, res) => {
    res.send("Home page api")
})

app.use('/user', userRouter)
app.use('/quiz', quizRouter)
app.use('/question', questionRouter)


app.listen(port, () => {
    console.log(`server is running on port :${port}`)
})