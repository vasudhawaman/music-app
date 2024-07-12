const mongoose = require('mongoose');
const { Schema } = mongoose;

const ViewSchema = new Schema({
    song: {
        type: String
    },
   user_id: {
        type: String,
    },
    count:{type:Number}
})

module.exports=mongoose.models.View || mongoose.model('View',ViewSchema)