const mongoose = require('mongoose');
const { Schema } = mongoose;

const RadioSchema = new Schema({
    username:{type:String},
    audio:{type:String},
    radio_name:{type:String},
    time:{type:String}
})

module.exports=mongoose.models.Radio || mongoose.model('Radio',RadioSchema)