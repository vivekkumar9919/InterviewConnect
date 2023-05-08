const titleController = require('../controller/titleController');
const express = require('express');
const router = express.Router();

router.post('/add-title',auth.authenticate,titleController.posttitle);
//Fetch all the title by it's catagory
router.get('/get-title',auth.authenticate,titleController.gettitleBycatagory);
//update the title with their ID
router.put('/update-title/:id',auth.authenticate,titleController.updatetitle);
//delete the title with their ID
router.delete('/delete-title/:id',auth.authenticate,titleController.deletetitle);

module.exports = router;