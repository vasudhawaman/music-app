const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const Radio = require('../models/Radio');
const verifyToken = require('../middleware/verifyToken');
const User = require('../models/User');

const router = express.Router();
router.get('/all',verifyToken,async(req,res)=>{
   const newTime = new Date();
   const result = await Radio.find();
   console.log(result);
  return res.status(200).json(result);
})

router.post('/create',verifyToken,async(req,res)=>{
      const {name,audio,date } =req.body;
      console.log(req.body)
     try{
         const user = await User.find({_id:req.id});
         const newRadio = new Radio({
         time:date,
         radio_name:name,
         username:user[0].username,
         audio:audio
      });
      await newRadio.save();
    }catch(err){
        console.log(err)
       return res.status(400).json({message:"Not created"})
    }
   return res.status(200).json({message:"success"})

});

module.exports = router;