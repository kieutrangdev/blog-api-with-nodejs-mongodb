const express = require("express");

const commentRoutes = express.Router();

// comments route
commentRoutes.post("/", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "comment created",
    });
  } catch (error) {
    res.json(error.message);
  }
});

commentRoutes.get("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "comment route",
    });
  } catch (error) {
    res.json(error.message);
  }
});

commentRoutes.delete("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "comment delete",
    });
  } catch (error) {
    res.json(error.message);
  }
});

commentRoutes.put("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "comment update",
    });
  } catch (error) {
    res.json(error.message);
  }
});
module.exports = commentRoutes;