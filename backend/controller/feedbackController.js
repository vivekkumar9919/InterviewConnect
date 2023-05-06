const feedbackmodel = require('../models/feedback');

const feedbackController = {
    async postFeedback(req,res){
        try{

            const result = await feedbackmodel.create(req.body);
            res.status(201).json({comment:result});
        }
        catch(err){
            console.log(err);
        }
    },
    async showfeedback(req,res){
        try{

            const result = await feedbackmodel.find({});
            res.status(201).json({comment:result});
        }
        catch(err){
            console.log(err);
        }
    }
}

module.exports = feedbackController;