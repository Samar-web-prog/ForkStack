var express = require('express');
var router = express.Router();
var User=require('../model/user')
var joi=require('@hapi/joi');
const { valid } = require('@hapi/joi');
const Joi = require('@hapi/joi');
const jwt=require('jsonwebtoken');
const { JSONCookie } = require('cookie-parser');
const bcrypt=require('bcryptjs');
var controllerUser={}
controllerUser.getAll=
async (req, res, next)=>{
  res.render('index', { title: 'Express' });
};

  //Validation
  const schema=joi.object({
    FirstName:joi.string().required(),
    LastName:joi.string().required(),
    Email:joi.string().required().email(),

    username:joi.string().required(),
    Password:joi.string().required().min(8),
    Country:joi.string().required(),
    Phone:joi.number(),
    sex:joi.string(),

    style:Joi.string(),
    
  });

controllerUser.register=async(req,res)=>{
    var validation=schema.validate(req.body);
    const {error}=schema.validate(req.body);
 if(error) return res.send(error.details[0].message);
 //Checking if the email exist or not
 const EmailExists=await User.findOne({Email:req.body.Email});
 if(EmailExists) return res.status(400).send("Email already Exists");
 //Hash the password
const salt=await bcrypt.genSalt(10);
const hashedPassword=await bcrypt.hash(req.body.Password,salt);



    var user = new User(
        {FirstName: req.body.FirstName,
            LastName:req.body.LastName,
            Country:req.body.Country,
            Password:hashedPassword,
            Email:req.body.Email,
            sex:req.body.sex,
            style:req.body.style,
            BirthDate:req.body.BirthDate,
            username:req.body.username,
            Phone: req.body.Phone}
    );
    try{
       const savedUser=await user.save();
       //res.send({user:savedUser._id});
       const token=jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
        res.header('auth-token',token).send(token);
    }catch(err){
      res.status(400).send(err);

    }
};
//Login
const LogSchema=joi.object({
    Email:joi.string().required().email(),
    Password:joi.string().required().min(8),
    
})
controllerUser.login=async(req,res)=>{
   // var validation=LogSchema.validate(req.body);
    const {error1}=LogSchema.validate(req.body);
 if(error1) return res.send(error1.details[0].message);
 //Checking if the User exists
 const user=await User.findOne({Email:req.body.Email});
 if(!user) return res.status(400).send("Email is wrong");
 //Checking If Password is correct
 const validPassword=await bcrypt.compare(req.body.Password,user.Password);
 if(!validPassword) return res.status(400).send("Password is wrong");
//create JWT Token
const token=jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
res.header('auth-token',token).send(token);

};

module.exports=controllerUser;

