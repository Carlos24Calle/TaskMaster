const express= require("express");
const router = express.Router();
const User = require('../app/controller/User.controller');
// const { validateToken } = require("../../helpers/auth-token");



const objUser = new User();

router.get("/" ,objUser.getAll);
router.get("/users/:userId", objUser.getById);
router.post("/create", objUser.create);
router.put("/update/:userId", objUser.update);
router.delete("/delete/:userId", objUser.delete);
router.delete("/users/:username", objUser.getUser);

module.exports= router;