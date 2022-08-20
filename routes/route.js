const express = require('express')

const userRoute = express.Router();
const loginController = require('../controllers/auth/loginControlller')
const registerController = require('../controllers/auth/registerController')
const userController = require('../controllers/auth/userController')
const singleUserController = require('../controllers/auth/singleUserController')

const registerMiddlware = require('../middleware/auth/registerMiddleware')
const loginMiddlware = require('../middleware/auth/loginMiddleware');
const jwtMiddleware = require('../middleware/jwt/jwtMiddleware');

userRoute.get("/users", userController);
userRoute.get("/:id", singleUserController);
userRoute.post('/login', loginMiddlware, loginController)
userRoute.post("/register", registerMiddlware, registerController);

module.exports = userRoute