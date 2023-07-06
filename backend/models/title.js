const mongoose = require('mongoose');

const collection = new mongoose.Schema({
    tagname:{
        type:String,
        required:true
    },
    cname:{
        type:String,
        required:true
    }
});

const titlemodel = mongoose.model('title',collection);



module.exports = titlemodel;