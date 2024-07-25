const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const Recommend = require('../models/Recommend');
const verifyToken = require('../middleware/verifyToken');
const User = require('../models/User');
const Music = require('../models/Music');
const Playlist = require('../models/Playlist');
const router = express.Router();
router.get('/artist',verifyToken,async(req,res)=>{
    const result = await Recommend.distinct("artist");
    console.log(result)
   return res.status(200).json(result)
  
 });
 router.get('/all',verifyToken,async(req,res)=>{
    const result = await Recommend.find({user_id:req.id});
   return res.status(200).json(result)
 });
 router.get('/top',verifyToken,async(req,res)=>{
    const result = await Music.find().sort({count:-1},{$limit:10});
   return res.status(200).json(result)
 });
router.post('/create',verifyToken,async(req,res)=>{
      const {song,artist} =req.body;
      console.log("called here")
     try{
         const user = await Recommend.find({song:song,user_id:req.id});
         const music = await Music.find({song:song});
        if(user.length == 0){
            const newRecommend = new Recommend({
                user_id:req.id,
                song:song,
                artist:artist,
                cover:music[0].cover,
                audio:music[0].audio,
            });
            await newRecommend.save();
        }
     
    }catch(err){
        console.log(err)
       return res.status(400).json({message:"Not created"})
    }
   return res.status(200).json({message:"success"})

});
router.post('/share',verifyToken,async(req,res)=>{
    const {value,id} =req.body;
    let result;
    if(value==="playlist"){
         result = await Playlist.find({_id:id});
    }else if(value==="song"){
        result = await Music.find({_id:id});
   }
 return res.status(200).json(result)

});

module.exports = router;
