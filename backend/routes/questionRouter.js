const questionController = require('../controller/questionController');
const express = require('express');
const router = express.Router();

// add question
router.post('/add-question',questionController.postquestion);
//Fetch all the questions
router.get('/get-Allquestions',questionController.getquestionByTagName);
//update the question with their ID
router.put('/update-question/:id',questionController.updatequestion);
//delete the question with their ID
router.delete('/delete-question/:id',questionController.deletequestion);

module.exports = router;