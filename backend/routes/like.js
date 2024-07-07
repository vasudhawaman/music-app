const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const Playlist = require('../models/Playlist');
const verifyToken = require('../middleware/verifyToken');
const User = require('../models/User');
const Follow = require('../models/Follow');
const Like= require('../models/Like');
const router = express.Router();
router.post('/add',verifyToken,async(req,res)=>{
      const {song } =req.body;
      console.log(req.body)
     try{
         const newLike = new Like({
         song:song,
         user_id:req.id
      });
      await newLike.save();
    }catch(err){
        console.log(err)
       return res.status(400).json({message:"Not liked"})
    }
   return res.status(200).json({message:"Sucess"})

});
router.post('/check',verifyToken,async(req,res)=>{
    const {song } =req.body;
    console.log(song)
   try{ 
    const isLiked = await Like.find({user_id:req.id,song:song});
    console.log(isLiked)
    if(isLiked.length >0) return res.status(200).json({message:"true"})
    else return res.status(400).json({message:"Not liked"})
  }catch(err){
      return res.status(400).json({message:"Not liked"})
  }
  
});
router.delete('/:name',verifyToken,async(req,res)=>{
     try{
        const playlists = await Playlist.findOneAndDelete({user_id:req.id,song:req.params.name});
     } catch(err){
        return res.status(400).json({message:"Not unliked!"})
     }
      res.status(200).json({message:"Unliked!"});
});

module.exports = router;