const express = require('express');
const cors =require('cors');
const bodyParser =require('body-parser');
const Music = require('./model');
const mongoose =require('mongoose');

mongoose.connect("mongodb+srv://vasudhawaman734:NTmWW8UMpb5980be@cluster0.ctfmgcz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
const db =mongoose.connection;
db.on('error',console.error.bind(console,'connection error!!'));
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended :false}));

app.use(express.json());
// req doesnt contain file so multer middleware isused 
  
app.use(express.urlencoded({extended: false}));


app.get('/song',async (req,res)=>{
     const result = await Music.find();
     res.send(result)
});


app.listen(8000,()=>{
     console.log("Listening on port 8000");
});