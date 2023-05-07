const titleController = require('../controller/titleController');
const express = require('express');
const router = express.Router();


// Post One title
router.post('/add-title',titleController.posttitle);
//Fetch all the title by it's catagory
router.get('/get-title',titleController.gettitleBycatagory);
//update the title with their ID
router.put('/update-title/:id',titleController.updatetitle);
//delete the title with their ID
router.delete('/delete-title/:id',titleController.deletetitle);

module.exports = router;