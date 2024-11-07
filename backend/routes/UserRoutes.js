const express = require("express");
const router = express.Router();

// Controller
const {register,
    getCurrentUser, login} = require("../controllers/UserController");

// Middlewares
const validate = require("../middlewares/handleValidation");
const {userCreateValidation, loginValidation} = require("../middlewares/userValidations");
const authGuard = require("../middlewares/authGuard");

// Routes
router.post("/register", userCreateValidation(), validate, register);
router.get("/profile", authGuard, getCurrentUser);
router.post("/login", loginValidation(), validate, login);

module.exports = router;