const express = require("express");
const { createPostCtrl, getAllPostCtrl, getPostCtrl, deletePostCtrl , updatePostCtrl } = require("../../controllers/posts/postController");

const postRoutes = express.Router();

postRoutes.post("/", createPostCtrl);

postRoutes.get("/:id", getPostCtrl);

postRoutes.get("/", getAllPostCtrl);

postRoutes.delete("/:id", deletePostCtrl);

postRoutes.put("/:id", updatePostCtrl);

module.exports = postRoutes
