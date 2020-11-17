const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    schedule: {
        type: String,
        required: true
    }
});

const todoModel = mongoose.model('todos', todoSchema);

module.exports = todoModel;