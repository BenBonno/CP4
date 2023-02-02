const express = require("express");

const router = express.Router();

const flagControllers = require("./controllers/flagControllers");
const userControllers = require("./controllers/userControllers");
const scoreControllers = require("./controllers/scoreControllers");
const middleware = require("./services/middleware");

// Appel API
router.get("/random", flagControllers.getRandomFlag);

// CRUD User
router.post("/user", middleware.verifyUser, userControllers.createUser);
router.get("/users", userControllers.getAllUsers);
router.put("/user", userControllers.updateUser);
router.delete(
  "/user/:id",
  middleware.verifyPassword,
  userControllers.deleteUser
);

// Post score
router.post("/users/:id", middleware.checkScore, scoreControllers.postScore);

module.exports = router;
