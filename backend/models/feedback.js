const mongoose = require('mongoose');

const collection = new mongoose.Schema({
    comment:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
})

const feedbackmodel = mongoose.model('feedback',collection);


module.exports = feedbackmodel;