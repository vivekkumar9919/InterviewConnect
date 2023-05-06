const questionmodel = require('../models/Question');
const CustomError = require('../utils/errorHandler');

const questionController = {
    async postquestion(req,res,next){
        try{
            const data = await questionmodel.create(req.body);
            res.status(201).json({message:"Question successfully posted",data:data});

        }
        catch(err){
            console.log(err)
            next(new CustomError(err.message, 500, "Unable to add Question"));
        }
    },
    async getquestionByTagName(req,res,next){
        const tagname = req.query.tagname;
        try{
                const data = await questionmodel.find({tagname:tagname});
                res.status(201).json({data:data});
        }
        catch(err){
            next(new CustomError(err.message, 401,"Unable to fetch questions"))
        }
    },
    async updatequestion(req,res){
        const id = req.params.id;
        try{
                const newrecord = {
                    qname:req.body.qname,
                    answer: req.body.answer,
                    photo: req.body.photo,
                    level:req.body.level,
                }
                const data = await questionmodel.findByIdAndUpdate(id,newrecord,{new:true});
                res.status(201).json({data:data});
        }
        catch(err){
            console.log(err);
        }
    },
    async deletequestion(req,res){
        const id = req.params.id;
        try{
                await questionmodel.findByIdAndRemove(id);
                res.status(201).json({message:"record is deleted"});
        }
        catch(err){
            console.log(err);
        }
    }

}

module.exports = questionController;