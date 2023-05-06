const catagoryController = require('../controller/catagoryController');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');


router.post('/add-catagory',catagoryController.postcatagory);
router.get('/get-catagory',catagoryController.getAllcatagory);
router.put('/update-catagory/:id',catagoryController.updatecatagory);
router.delete('/delete-catagory/:id',catagoryController.deletecatagory);

module.exports = router;