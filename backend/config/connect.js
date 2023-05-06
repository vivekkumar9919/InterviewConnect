const mongoose = require('mongoose');

const url = "mongodb://127.0.0.1:27017/InterviewConnect";


const connection = async ()=> {
    try{
            mongoose.set('strictQuery',false);
            await mongoose.connect(url);
            console.log(`Database is connected`)
    }
    catch(err){
        console.log(`Error in mongodb connection ${err}`)
    }
}

module.exports =  connection;
