const questionController = require('../controller/questionController');
const express = require('express');
const router = express.Router();


router.post('/add-question',questionController.postquestion);
router.get('/get-questions',questionController.getquestionByTagName);
router.put('/update-question/:id',questionController.updatequestion);
router.delete('/delete-question/:id',questionController.deletequestion);

module.exports = router;