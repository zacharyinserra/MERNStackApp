const express = require("express");
const router = express.Router();

// controller imports
const { register } = require("../controllers/auth");

router.get("/register", register);

module.exports = router;
