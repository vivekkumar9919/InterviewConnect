const jwt = require('jsonwebtoken');
const usermodel = require('../models/User');
const CustomError = require('../utils/errorHandler');
const auth = {
    async authenticate(req,res,next){
        try{
            //fetching token from the user
            let token = req.headers.authorization;
            // console.log(req.user.admin);
            if(token){
                //verifying the correct token
                const user = jwt.verify(token,process.env.SECRET_KEY);
                req.user = await usermodel.findById(user.id);
                // console.log(user.admin);
                //if user is not admin
                if(user.admin == false){
                    return res.status(401).json({message:"Unauthorized!"})
                }
                else{
                    next();
                }
                // req.userId = user.id;
                // next();
            }
            else{
                return CustomError(401,`Unauthorised user`);
            }
        }
        catch(err){
            next(err);
        }
    }
}

module.exports = auth;