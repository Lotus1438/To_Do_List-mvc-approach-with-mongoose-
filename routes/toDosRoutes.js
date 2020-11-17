const express = require("express");
const router = express.Router();

const {
    getToDos,
    addToDo,
    getToDoById,
    updateToDos,
    deleteToDos,
} = require("../controllers/toDosController");

// define every routes for toDosController specific functions  
router.get("/task", getToDos);
router.get("/task/:id", getToDoById);
router.post("/task", addToDo);
router.post("task/:id", updateToDos);
router.get("/task/delete/:id", deleteToDos);


module.exports = router;