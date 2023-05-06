const mongoose = require('mongoose');

const collection = new mongoose.Schema({
    cname:{
        type:String,
        required:true
    },
})
const catagorymodel = mongoose.model('catagory',collection);


module.exports = catagorymodel;