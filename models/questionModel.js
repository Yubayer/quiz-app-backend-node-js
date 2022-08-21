
const mongoose = require("mongoose");
const QuestionSchema = new mongoose.Schema({
    mark: {
        type: Number,
        default: 0
    },
    question: {
        type: String,
        required: true
    },
    options: {
        type: Array,
        default: []
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz'
    }

},
    {
        timestamps: true
    }
);

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;