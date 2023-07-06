const mongoose = require('mongoose');

const connection = async ()=> {
    try{
            mongoose.set('strictQuery',false);
            //connecting to mongoDB
            await mongoose.connect(process.env.MONGO_URL);
            //showing message to the app server
            console.log(`Database is connected`)
    }
    catch(err){
        console.log(`Error in mongodb connection ${err}`)
    }
}

module.exports =  connection;
