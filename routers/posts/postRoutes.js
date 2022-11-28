const express = require("express");

const postRoutes = express.Router();

postRoutes.post("/", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "post created",
    });
  } catch (error) {
    res.json(error.message);
  }
});

postRoutes.get("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "post route",
    });
  } catch (error) {
    res.json(error.message);
  }
});

postRoutes.get("/", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "posts route",
    });
  } catch (error) {
    res.json(error.message);
  }
});

postRoutes.delete("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "post delete",
    });
  } catch (error) {
    res.json(error.message);
  }
});

postRoutes.put("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "update post",
    });
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = postRoutes
