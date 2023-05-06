const adminmodel = require('../models/Admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'ABSCCSD';

const userController = {
    
        async signup(req,res,next){
            const {name,email,password} = req.body;
            try{
                //check if it is existing user or not
                const existinguser = await adminmodel.findOne({email:email});
                if(existinguser){
                    return res.status(400).json({message:'User Already Exists'}).send(`User already exists`);
                }
                //encrypt the password
                const hashpassword = await bcrypt.hash(password,10);

                const result = await adminmodel.create({
                    name:name,
                    email:email,
                    password:hashpassword
                });

                //generate the token 
                const token = await jwt.sign({email:result.email,id:req._id},SECRET_KEY,{expiresIn:'1h'});
                
                res.status(200).json({user:result,token:token});
                console.log(result.email);

                
            }
            catch(err){
                console.log(err);
            }
        },
        async login(req,res){
            const {email,password} = req.body;
            try{
                //find the existing user
                const userDetails = await adminmodel.findOne({email:email});
                //compare the encrypted password with the requested password
                const matchedpassword = bcrypt.compare(password,userDetails.password);
                //invalid credential
                if(userDetails.email != email && !matchedpassword){
                    res.status(400).json({message:`User not found please login first`}).send("User not found");
                }

                if(userDetails.email === email && matchedpassword ){
                    const token = await jwt.sign({email:userDetails.email,id:req._id},SECRET_KEY,{expiresIn:'1h'});

                    res.status(201).json({message:'successfully login',user:userDetails,token:token}).send(`Login Successfully`);
                }
            }
            catch(err){

            }
        }
}

module.exports = userController;