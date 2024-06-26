const mongoose = require('mongoose')

const ToDoSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
})

const ToDo = mongoose.model('ToDoCollection', ToDoSchema)

module.exports = ToDo