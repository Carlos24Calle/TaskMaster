const express= require("express");
const router = express.Router();
const Category = require('../app/controller/Category.controller');
// const { validateToken } = require("../../helpers/auth-token");

const objCategory = new Category();

router.get("/", objCategory.getAll);
router.get("/category/:categoryId", objCategory.getById);
router.post("/create", objCategory.create);
router.put("/update/:categoryId", objCategory.update);
router.delete("/delete/:categoryId", objCategory.delete);

module.exports= router;