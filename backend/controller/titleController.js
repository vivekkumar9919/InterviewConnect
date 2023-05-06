const titlemodel = require('../models/title');

const titleController = {
    async posttitle(req, res) {

        try {
            const data = await titlemodel.create(req.body);
            // add one flash message also
            res.status(201).json({ message: "title successfully posted", data: data });

        }
        catch (err) {
            console.log(err);
        }
    },
    async gettitleBycatagory(req, res) {
        const cname = req.query.cname;
        try {
            const data = await titlemodel.find({cname:cname});
            res.status(201).json({ data: data });
        }
        catch (err) {
            console.log(err);
        }
    },
    async updatetitle(req, res) {
        const id = req.params.id;
        try {
            const newrecord = {
                tagname:req.body.tagname
            }
            const data = await titlemodel.findByIdAndUpdate({ _id: id }, newrecord,{new:true});
            res.status(201).json({ data: data });
        }
        catch (err) {
            console.log(err);
        }
    },
    async deletetitle(req, res) {
        const id = req.params.id;
        try {
            await titlemodel.findByIdAndRemove({ _id: id });
            res.status(201).json({ message: "record is deleted" });
        }
        catch (err) {
            console.log(err);
        }
    }

}

module.exports = titleController;