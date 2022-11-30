const express = require("express");
const { commentCreateCtrl, commentGetCtrl, commentDeleteCtrl, commentUpdateCtrl } = require("../../controllers/comments/commentController");

const commentRoutes = express.Router();

// comments route
commentRoutes.post("/", commentCreateCtrl);

commentRoutes.get("/:id", commentGetCtrl);

commentRoutes.delete("/:id", commentDeleteCtrl);

commentRoutes.put("/:id", commentUpdateCtrl);
module.exports = commentRoutes;
