const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const Playlist = require('../models/Playlist');
const verifyToken = require('../middleware/verifyToken');
const User = require('../models/User');
const Follow = require('../models/Follow');
const Like= require('../models/Like');
const View= require('../models/View');
const router = express.Router();

router.post('/increase',verifyToken,async(req,res)=>{
        const {song} = req.body
        console.log("called");
       const view = await View.find({user_id:req.id,song:song});
       if(view.length === 0){
            const newView = new View({
                user_id:req.id,
                song:song,
                count:1
            })
            await newView.save()
       }else{
           const update = await View.findOneAndUpdate({user_id:req.id,song:song},{$inc:{count:1}});
       }
       res.status(200).json({message:"success"})
})
module.exports = router;