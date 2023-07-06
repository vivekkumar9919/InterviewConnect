const mongoose = require('mongoose');

const collection = new mongoose.Schema({
    qname:{
        type:String,
    },
    answer:{
        type:String
    },
    photo:{
        type:String
    },
    cname:{
        type: String,
        required:true,
    },
    tagname:{
        type: String,
        required:true,
    },
    level:{
        type:String,
        required:true
    }
});

const questionmodel = mongoose.model('question',collection);


module.exports = questionmodel;