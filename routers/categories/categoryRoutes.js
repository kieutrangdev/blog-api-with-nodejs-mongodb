const express = require("express");
const { cateCreateCtrl, cateGetCtrl, cateDeteleCtrl, cateUpdateCtrl } = require("../../controllers/categories/categoryController");

const categoryRoutes = express.Router();
// category

categoryRoutes.post("", cateCreateCtrl);

categoryRoutes.get("/:id", cateGetCtrl);

categoryRoutes.delete("/:id", cateDeteleCtrl);

categoryRoutes.put("/:id", cateUpdateCtrl);

module.exports = categoryRoutes;
