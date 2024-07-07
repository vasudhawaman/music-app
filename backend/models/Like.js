const mongoose = require('mongoose');
const { Schema } = mongoose;

const LikeSchema = new Schema({
    song: {
        type: String
    },
   user_id: {
        type: String,
    },
})

module.exports=mongoose.models.Like || mongoose.model('Like',LikeSchema)