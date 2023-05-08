const feedbackmodel = require('../models/feedback');

const feedbackController = {
    async postFeedback(req,res,next){
        try{

            const result = await feedbackmodel.create(req.body);
            res.status(201).json({comment:result});
        }
        catch(err){
            next(err);
        }
    },
    async showfeedback(req,res,next){
        try{

            const result = await feedbackmodel.find({});
            res.status(201).json({comment:result});
        }
        catch(err){
            next(err);
        }
    }
}

module.exports = feedbackController;