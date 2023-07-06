const usermodel = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CustomError = require('../utils/errorHandler');

const userController = {
    
        async signup(req,res,next){
            const {name,email,password} = req.body;
            try{
                //check if it is existing user or not
                const existinguser = await usermodel.findOne({email:email});
                if(existinguser){
                    return next(CustomError(409,"User Already Exists"))
                }
                //encrypt the password
                const hashpassword = await bcrypt.hash(password,10);

                const result = await usermodel.create({
                    name:name,
                    email:email,
                    password:hashpassword
                });

                //generate the token 

                const token = jwt.sign({email:result.email,id:req._id},process.env.SECRET_KEY,{expiresIn:'1h'});

                
                res.status(200).json({user:result,token:token,message:"Signed Up Successfully"});
                // console.log(result.email); 
            }
            catch(err){
                next(err);
            }
        },
        async login(req,res,next){
            const {email,password} = req.body;
            try{
                // console.log(password);
                //find the existing user
                const userDetails = await usermodel.findOne({email:email});
                // console.log(userDetails);
                if(!userDetails){
                    return next(CustomError(404, "User not found!"));
                    
                }
                //compare the encrypted password with the requested password
                const matchedpassword = await bcrypt.compare(password,userDetails.password);
                // console.log("sahja = " + matchedpassword);
                //invalid credential
                
                if(!matchedpassword){
                    // console.log("sha = " + matchedpassword)
                    return next(CustomError(404, "Invalid Credentials"));
                    
                }
                    // console.log("id = " + userDetails._id);

                    const token = jwt.sign({email:userDetails.email, id:req._id},process.env.SECRET_KEY,{expiresIn:'1h'});


                    res.cookie("access_token", token, {
                        httpOnly: true,
                      })
                      .status(200)
                      .json({message: "Logged In", details:userDetails})
                
            }
            catch(err){
                next(err);
            }
        }
}

module.exports = userController;