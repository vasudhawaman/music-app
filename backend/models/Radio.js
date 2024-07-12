const mongoose = require('mongoose');
const { Schema } = mongoose;

const RadioSchema = new Schema({
    usename:{type:String},
    user_profile:{type:String},
    radio:{type:String},
    radio_name:{type:String},
    time:{type:String}
})

module.exports=mongoose.models.Radio || mongoose.model('Radio',RadioSchema)