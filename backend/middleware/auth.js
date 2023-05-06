const jwt = require('jsonwebtoken');
const usermodel = require('../models/User');

const auth = {
    async authenticate(req,res,next){
        try{
            //fetching token from the user
            let token = req.headers.authorization;
            if(token){
                //verifying the correct token
                const user = jwt.verify(token,SECRET_KEY);
                req.user = await usermodel.findById(user.id);
                // req.userId = user.id;
            }
            else{
                return res.status(404).json({message:`Unauthorised user`});
            }
        }
        catch(err){
            console.log(err);
        }
    }
}

module.exports = auth;