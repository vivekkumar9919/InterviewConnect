const catagoryController = require('../controller/catagoryController');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');


// Post One catagory 
router.post('/add-catagory',auth.authenticate,catagoryController.postcatagory);

//Fetch all the catagories
router.get('/get-catagories',auth.authenticate,catagoryController.getAllcatagory);

//update the catagory with their ID
router.put('/update-catagory/:id',auth.authenticate,catagoryController.updatecatagory);
//delete the catagory with their ID
router.delete('/delete-catagory/:id',auth.authenticate,catagoryController.deletecatagory);

module.exports = router;