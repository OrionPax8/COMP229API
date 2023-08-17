const express = require('express');
const router = express.Router();
// create a User Model Instance
const userModel = require('../models/user');
const User = userModel.User;

const userController = require('../controllers/userController');

// Sends token via json
router.post('/login', userController.LoginUser);

// Could probably be processed in app (clear cookie)
router.get('/logout', userController.LogoutUser);

module.exports = router;