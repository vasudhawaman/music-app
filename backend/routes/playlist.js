const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const Playlist = require('../models/Playlist');
const verifyToken = require('../middleware/verifyToken')
const router = express.Router();

router.get('/all',verifyToken,async(req,res)=>{
      const playlists = await Playlist.find({userId:req.id});
      res.status(200).json(playlists);
});
router.get('/:name',verifyToken,async(req,res)=>{
      const playlists = await Playlist.find({userId:req.id,name:req.params.name});
      res.status(200).json(playlists);
})
router.post('/create',verifyToken,async(req,res)=>{
      const {name}= req.body;
      console.log(req.body)
      const id = req.id;
      try{
            const alreadyExist = await Playlist.find({ $and: 
                  [{name:name},{userId:id}]});
           
            if(alreadyExist.length >0) res.status(409).json({message: "Already exists"})
            else throw "e"      
      }catch(err){
            const Newplaylist = new Playlist({
                 
                  name:name,
                  userId:id
             });
             try{
                const info =  await Newplaylist.save()
                 if(info) res.status(200).json({message:"sucess"})
             }catch(err){
            console.log(err)
                   res.status(403).json({message:"Playlist not created!"});
             }
      }
      
});
router.delete('/delete/:name',verifyToken,async(req,res)=>{
           const {name} =req.params;
           const id = req.id;
           try{
              
               const info = await Playlist.findOneAndDelete({$and:[{userId:id,name:name}]});
             res.status(200).json({message:"Playlist Deleted!!"})
           }catch(err){
            res.status(403).json({message:"Playlist not deleted!"});
      }
});

router.put("/add",verifyToken,async(req,res)=>{
         const {songs,name} = req.body;
         console.log(req.body)
         const id = req.id;
          try{
               const info = await Playlist.findOneAndUpdate({name:name,userId:id},{$push:{songs:songs}});
                res.status(200).json({message:"Song added Successfully!"})
             console.log(info)
          }catch{
              res.status(403).json({message:"Song not added!"});
       }

})
router.post('/search',verifyToken,async(req,res)=>{
      const {name}=req.body;
      const id =req.id;
      try{
            const result = await Playlist.find({$and:[{name:{$regex:name}},{userId:id}]});
           console.log(result)
            res.status(200).json({ message:"success",result:result})
                  
      }catch(err){
            res.status(404).json({message:"notfound"})
      }

})
module.exports = router;