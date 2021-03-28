var express = require('express');
var router = express.Router();
var Userr=require('../model/Userr')

var userMnagement={};
userMnagement.getAll=async (req, res, next)=>{
    res.render('index', { title: 'Express' });
  };
userMnagement.postRegister=async(req,res)=>{
        var user=new Userr(
            {FirstName:"Samar",LastName:"Romdhani",Country:"Tunisia",Email:"samar.romdhani1@esprit.tn",
            sex:"women",phone:21
            
        }
        );
        user.save();
        res.send("added");
    };
   


module.exports=userMnagement;