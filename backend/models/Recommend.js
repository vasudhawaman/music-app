const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecommendSchema = new Schema({
    song: {
        type: String
    },
   user_id: {
        type: String,
    },
    artist:{
        type:String,
       
    },
    cover:{
        type:String,
       
    },
    audio:{
        type:String,
       
    },
    type:{
        type:String,
    },
    name:{
        type:String,
    }
})

module.exports=mongoose.models.Recommend || mongoose.model('Recommend',RecommendSchema)