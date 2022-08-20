const mongoose = require("mongoose");
const User = require('./userModel')
const QuizSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    question: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question'
        }
    ]
},
    {
        timestamps: true
    }
);

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;