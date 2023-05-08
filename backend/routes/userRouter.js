const UserController = require('../controller/UserController');
const express = require('express');
const router = express.Router();

//routes to signup a user account
router.post('/user/signup',UserController.signup);
//routes to login a user account
router.post('/user/login',UserController.login);

module.exports = router;