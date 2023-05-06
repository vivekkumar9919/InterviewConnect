const catagorymodel = require('../models/Catagory');

const catagoryController = {
    async postcatagory(req,res){
        
        try{
                const data = await catagorymodel.create(req.body);
                // console.log(data.title, data.questions);
                res.status(201).json({message:"catagory successfully posted",data:data});

        }
        catch(err){
            console.log(err.message);
        }
    },
    async getAllcatagory(req,res){
        // const name = req.query.name;
        try{
                const data = await catagorymodel.find({});
                res.status(201).json({data:data});
        }
        catch(err){
            console.log(err);
        }
    },
    async updatecatagory(req,res){
        const id = req.params.id;
        try{
                const newrecord = {
                    cname:req.body.cname
                }
                const data = await catagorymodel.findByIdAndUpdate(id,newrecord,{new:true});
                res.status(201).json({data:data});
        }
        catch(err){
            console.log(err);
        }
    },
    async deletecatagory(req,res){
        const id = req.params.id;
        try{
                const record = await catagorymodel.findByIdAndRemove(id);
                res.status(201).json({message:"record is deleted",record:record});
        }
        catch(err){
            console.log(err);
        }
    }

}

module.exports = catagoryController;