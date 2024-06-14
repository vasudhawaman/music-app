const express = require('express');
const cors =require('cors');
const bodyParser =require('body-parser');
const Music = require('./model');
const mongoose =require('mongoose');
const cookieParser = require('cookie-parser')
const verifyToken = require('./middleware/verifyToken');
const setToken = require('./middleware/setToken')
mongoose.connect("mongodb+srv://vasudhawaman734:NTmWW8UMpb5980be@cluster0.ctfmgcz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
const db =mongoose.connection;
db.on('error',console.error.bind(console,'connection error!!'));

const app = express();
app.use(cookieParser())
// var allowCrossDomain = function(req, res, next) {
//      res.header('Access-Control-Allow-Origin', '*');
//      res.header('Access-Control-Allow-Methods', 'GET,POST');
//      next();
//  }
//  app.use(allowCrossDomain)
app.use(express.json())
app.use(cors(
     {
          credentials: true,
          origin:
            process.env.NODE_ENV === "production"
              ? process.env.CLIENT_URL
              : "http://localhost:3000",
        }
));
app.use(bodyParser.urlencoded({extended :false}));
app.use(express.urlencoded({extended: false}));


app.use('/auth',require('./routes/user'))
app.use('/playlist', require('./routes/playlist'));
app.get('/song',verifyToken,async (req,res)=>{
     const result = await Music.find();
     res.send(result)
});
app.get('/:token' ,(req,res)=>{
     console.log(req.params.token)
     res.cookie('token_musify',String(req.params.token),{
          maxAge:24*60*60*7,
      }).send({message:"success"})
     console.log(req.cookies)
})

app.listen(8000,()=>{
     console.log("Listening on port 8000");
});