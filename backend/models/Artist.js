const mongoose = require('mongoose');
const { Schema } = mongoose;

const ArtistSchema = new Schema({
    cover: {
        type: String
    },
    name: {
        type: String,
        unique:true
    },
    
})

module.exports=mongoose.models.Artist || mongoose.model('Artist',ArtistSchema)