const mongoose=require('mongoose');
const {Schema}= mongoose;

const playlistSchema=new Schema({
    userId:{
        type:String,
        require:true,
        unique:true
    },
    cover:{
        type:String,
        require:false
    },
    name:{
        type:String,
        require:false
    },
    songs:{
        type:Array,
        require:false,
       
    },
    duration:{
        type:String,
        require:false
    }
})

module.exports= mongoose.models.Playlist || mongoose.model("Playlist",playlistSchema)