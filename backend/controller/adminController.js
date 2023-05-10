// const adminmodel = require('../models/Admin');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const SECRET_KEY = 'ABSCCSD';

// const adminController = {
    
//         async signup(req,res,next){
//             const {name,email,password} = req.body;
//             try{
//                 //check if it is existing admin or not
//                 const existingadmin = await adminmodel.findOne({email:email});
//                 if(existingadmin){
//                     return res.status(400).json({message:'admin Already Exists'}).send(`admin already exists`);
//                 }
//                 //encrypt the password
//                 const hashpassword = await bcrypt.hash(password,10);

//                 const result = await adminmodel.create({
//                     name:name,
//                     email:email,
//                     password:hashpassword
//                 });

//                 //generate the token 
//                 const token = await jwt.sign({email:result.email,id:req._id},SECRET_KEY,{expiresIn:'1h'});
                
//                 res.status(200).json({admin:result,token:token});
//                 console.log(result.email);

                
//             }
//             catch(err){
//                 console.log(err);
//             }
//         },
//         async login(req,res){
//             const {email,password} = req.body;
//             try{
//                 //find the existing admin
//                 const adminDetails = await adminmodel.findOne({email:email});
//                 //compare the encrypted password with the requested password
//                 const matchedpassword = bcrypt.compare(password,adminDetails.password);
//                 //invalid credential
//                 if(adminDetails.email != email && !matchedpassword){
//                     res.status(400).json({message:`admin not found please login first`}).send("admin not found");
//                 }

//                 if(adminDetails.email === email && matchedpassword ){
//                     const token = await jwt.sign({email:adminDetails.email,id:req._id},SECRET_KEY,{expiresIn:'1h'});

//                     res.status(201).json({message:'successfully login',admin:adminDetails,token:token}).send(`Login Successfully`);
//                 }
//             }
//             catch(err){

//             }
//         }
// }

// module.exports = adminController;