const Todo = require('../models/to-do');

exports.deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const existingTask = await Todo.findOne({_id: taskId});
        if(!existingTask) {
            return res.status(400).json({message: "Task not found"});
        }
        const deleteTask = await Todo.deleteOne({
            _id: taskId
        });
        res.status(200).json({message: "Task deleted", task: deleteTask});
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
}