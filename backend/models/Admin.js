const mongoose = require('mongoose');

const collection = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const adminmodel = mongoose.model('admin',collection);


module.exports = adminmodel;