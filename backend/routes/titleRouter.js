const titleController = require('../controller/titleController');
const express = require('express');
const router = express.Router();


router.post('/add-title',titleController.posttitle);
router.get('/get-title',titleController.gettitleBycatagory);
router.put('/update-title/:id',titleController.updatetitle);
router.delete('/delete-title/:id',titleController.deletetitle);

module.exports = router;