const adminController = require('../controller/adminController');
const express = require('express');
const router = express.Router();

//routes to signup a user account
router.post('/admin/signup',UserController.signup);
//routes to login a user account
router.post('/admin/login',UserController.login);

module.exports = router;