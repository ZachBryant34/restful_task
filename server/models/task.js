const mongoose = require('mongoose');

const TaskScheme = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean, default: false
}, {timestamps:true})
const Task = mongoose.model('Task', TaskScheme);

module.exports = {
    Task: Task,
    TaskScheme: TaskScheme
}