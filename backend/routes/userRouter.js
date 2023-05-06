const UserController = require('../controller/userController.js');
const express = require('express');
const router = express.Router();


router.post('/signup',UserController.signup);
router.post('/login',UserController.login);

module.exports = router;