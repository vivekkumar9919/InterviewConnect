const titlemodel = require('../models/title');
const CustomError = require('../utils/errorHandler');


const titleController = {
    async posttitle(req, res,next) {

        try {
            const data = await titlemodel.create(req.body);
            if(!data){
                return next(CustomError(400,"Cannot post title"))

            }
            // add one flash message also
            res.status(201).json({ message: "title successfully posted", data: data });

        }
        catch (err) {
            // console.log(err);
            next(err);
        }
    },
    async gettitleBycatagory(req, res,next) {
        const cname = req.query.cname;
        try {
            const data = await titlemodel.find({cname:cname});
            if(!data){
                return next(CustomError(400,"Title Not Found"));
            }
            res.status(201).json({ data: data });
        }
        catch (err) {
            next(err);
        }
    },
    async updatetitle(req, res,next) {
        const id = req.params.id;
        try {
            const newrecord = {
                tagname:req.body.tagname
            }
            const data = await titlemodel.findByIdAndUpdate({ _id: id }, newrecord,{new:true});
            if(err){
                return next(CustomError(400,"Something Went Wrong"));
            }
            res.status(201).json({ message:"New record is updated" ,data: data  });
        }
        catch (err) {
            next(err);
        }
    },
    async deletetitle(req, res,next) {
        const id = req.params.id;
        try {
            await titlemodel.findByIdAndRemove({ _id: id });
            if(err){
                return next(CustomError(400,"Bad request"));
            }
            res.status(201).json({ message: "record is deleted" });
        }
        catch (err) {
            next(err);
        }
    }

}

module.exports = titleController;