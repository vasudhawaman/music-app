const express = require('express');
const cookieParser = require('cookie-parser');
const Playlist = require('../models/Playlist');
const Music = require('../models/Music');
const verifyToken = require('../middleware/verifyToken');
const User = require('../models/User');
const Follow = require('../models/Follow');
const Artist = require('../models/Artist');
const router = express.Router();

router.get('/all',async (req,res)=>{
    const result = await Music.find();
    res.json(result)
});
router.get('/artist',async (req,res)=>{
    const result = await Artist.find();
    console.log(result);
    res.json(result)

});
router.post('/song',verifyToken,async(req,res)=>{
      const {song}= req.body;
      console.log(song)
       const result = await Music.find({$or:[{song:{$regex:song,$options:"i"}},{artist:{$regex:song,$options:"i"}}]});
       console.log(result);
      res.status(200).json(result);
})
router.post('/artist',verifyToken,async(req,res)=>{
    const {artist} = req.body;
    const result = await Music.find({artist :{$regex:artist,$options:"i"}});
    res.status(200).json(result);
})
router.post('/playlist',verifyToken,async(req,res)=>{
    console.log(req.body);
    const {name} = req.body;
    const result = await Playlist.find({name:{$regex:name,$options:"i"},userId:req.id});

    res.status(200).json(result);
})
router.post('/follower',verifyToken,async(req,res)=>{
    const {name} = req.body;
    const result = await Follow.find({followerusername:{$regex:name,$options:"i"}});

    res.status(200).json(result);
})
router.post('/following',verifyToken,async(req,res)=>{
    const {name} = req.body;
    const result = await Follow.find({followingusername:{$regex:name,$options:"i"}});

    res.status(200).json(result);
})

module.exports = router; 