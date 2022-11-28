const express = require("express");

const categoryRoutes = express.Router();
// category

categoryRoutes.post("", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "categories created",
    });
  } catch (error) {
    res.json(error.message);
  }
});

categoryRoutes.get("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "categories route",
    });
  } catch (error) {
    res.json(error.message);
  }
});

categoryRoutes.delete("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "categories delete",
    });
  } catch (error) {
    res.json(error.message);
  }
});

categoryRoutes.put("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "categories update",
    });
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = categoryRoutes;
