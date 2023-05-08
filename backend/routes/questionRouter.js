const questionController = require('../controller/questionController');
const express = require('express');
const router = express.Router();

// add question
router.post('/add-question',auth.authenticate,questionController.postquestion);
//Fetch all the questions
router.get('/get-Allquestions',auth.authenticate,questionController.getquestionByTagName);
//update the question with their ID
router.put('/update-question/:id',auth.authenticate,questionController.updatequestion);
//delete the question with their ID
router.delete('/delete-question/:id',auth.authenticate,questionController.deletequestion);

module.exports = router;