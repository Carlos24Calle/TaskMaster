const express= require("express");
const router = express.Router();
const Tasks = require('../app/controller/Task.controller');
// const { validateToken } = require("../../helpers/auth-token");

const objTasks = new Tasks();

router.get("/:userId", objTasks.getAll);
router.get("/task/:taskId", objTasks.getById);
router.post("/create", objTasks.create);
router.put("/update/:taskId", objTasks.update);
router.delete("/delete/:taskId", objTasks.delete);

module.exports= router;