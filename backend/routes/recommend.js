const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const Recommend = require('../models/Recommend');
const verifyToken = require('../middleware/verifyToken');
const User = require('../models/User');

const router = express.Router();
router.get('/all',verifyToken,async(req,res)=>{
    const result = await Recommend.find({user_id:req.id})
   return res.status(200).json(result)
 });
 
router.post('/create',verifyToken,async(req,res)=>{
      const {song,artist} =req.body;
      console.log("called here")
     try{
         const user = await Recommend.find({song:song,user_id:req.id});
        if(user.length == 0){
            const newRecommend = new Recommend({
                user_id:req.id,
                song:song,
                artist:artist
            });
            await newRecommend.save();
        }
     
    }catch(err){
        console.log(err)
       return res.status(400).json({message:"Not created"})
    }
   return res.status(200).json({message:"success"})

});

module.exports = router;