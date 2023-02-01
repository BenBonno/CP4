const express = require("express");

const router = express.Router();

const flagControllers = require("./controllers/flagControllers");

router.get("/random", flagControllers.getRandomFlag);

module.exports = router;
