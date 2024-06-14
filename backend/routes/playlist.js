const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const Playlist = require('../models/Playlist');
const verifyToken = require('../middleware/verifyToken')
const router = express.Router();

router.get('/all',verifyToken,async(req,res)=>{
      const playlists = await Playlist.findAll({userId:req.id})
      res.send(playlists);
});
router.post('/create',verifyToken,async(req,res)=>{
      const {cover,name,songs} = req.body;
      const id = req.id;
      console.log(req.body)
      const Newplaylist = new Playlist({
           cover:cover,
           name:name,
           songs:songs,
           userId:id
      });
      try{
           await Newplaylist.save()
           res.status(200).json({message:"Playlist Created!"})
      }catch(err){
            res.status(403).json({message:"Playlist not created!"});
      }
});



module.exports = router;