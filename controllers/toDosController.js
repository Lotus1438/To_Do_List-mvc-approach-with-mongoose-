const express = require("express");
const ToDoList = require("../models/todos");
const parseRequestBody = require("../utils/parseRequestBody");


const getToDos = async(request, response) => {
    try {
        const tasks = await ToDoList.find();
        if (!tasks) {
            return response.status(400).json({
                error: "Error in getting Task!",
            });
        }

        response.render('index', { data: tasks })

    } catch (e) {
        return response.status(400).json({

            error: e,
        });
    }
};


const getToDoById = async(request, response) => {
    try {
        const task = await ToDoList.find({ _id: request.params.id });
        if (!task || task.length === 0) {
            return response.status(400).json({
                error: "Task not found!",
            });
        }

        response.render('update', { data: task })
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const addToDo = async(request, response) => {
    try {
        const task = {
            task: request.body.task,
            schedule: request.body.schedule,
        };

        const newToDoList = new ToDoList(task);

        const result = await newToDoList.save();

        if (!result) {
            return response.status(400).json({
                error: "Error in adding new Task!",
            });
        }

        response.redirect('./')
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const updateToDos = async(request, response) => {
    const updates = parseRequestBody(request.body);
    try {
        const result = await ToDoList.findByIdAndUpdate({ _id: request.params.id }, { $set: updates });

        if (!result) {
            return response.status(400).json({
                error: "Error in updating Task!",
            });
        }

        response.redirect('../')
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const deleteToDos = async(request, response) => {
    try {
        await ToDoList.findByIdAndDelete({ _id: request.params.id }, (error, result) => {
            if (error) {
                return response.status(400).json({
                    error: error,
                });
            }

            response.redirect('../')
        });
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

module.exports = {
    getToDos,
    addToDo,
    getToDoById,
    updateToDos,
    deleteToDos,
};