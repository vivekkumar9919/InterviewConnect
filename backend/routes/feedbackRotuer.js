const feedbackController = require('../controller/feedbackController');
const express = require('express');
const auth = require('../middleware/auth.js');
const router = express.Router();

//post the comment or feedback from users
router.post('/add-comment/:id',auth.authenticate,feedbackController.postFeedback);
// get all the feedbacks if needed.
router.get('/getAllComments',feedbackController.showfeedback);

module.exports = router;
