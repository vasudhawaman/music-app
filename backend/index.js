const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Music = require('./models/Music');
const User = require('./models/User')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const verifyToken = require('./middleware/verifyToken');
const setToken = require('./middleware/setToken');
const passport = require('passport');
const session = require('express-session')
const env = require('dotenv')
env.config()
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error!!'));
require('./OAuth/googleoauth')
const app = express();
app.use(cookieParser())
app.use(express.json())
app.use(session({
     secret: 'mysecret',
     resave: false,
     saveUninitialized: true,
     cookie: {
          secure: false,
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          httpOnly: true
     }
}));
app.use(passport.initialize());
app.use(passport.session());
 app.use(cors(
      {
          credentials: true,
          origin:
                process.env.NODE_ENV === "production"
                    ? process.env.FRONTEND
                    : "http://localhost:3000",
      }
 ));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use('/auth', require('./routes/user'))
app.use('/playlist', require('./routes/playlist'));
app.use('/search',require('./routes/search'));
app.use('/like',require('./routes/like'));
app.use('/view',require('./routes/view'));
app.use('/radio',require('./routes/radio'));
app.use('/recommend',require('./routes/recommend'));

app.get('/createToken/:token' ,(req,res)=>{
     console.log(req.params.token)
     res.cookie('token_musify',String(req.params.token),{
          maxAge:24*60*60*7*1000*3,
      }).send({message:"success"})
})
app.post('/upload', verifyToken, async (req, res) => {
     const { song, cover, audio,text } = req.body;
     const id = req.id;
     try {
          const result = await User.find({ _id: id });
          const { username } = result[0];
          const newSong = new Music({
               artist: username,
               song: song,
               cover: cover,
               audio: audio,
               text:text
          })
          newSong.save()
          res.status(200).json({ message: "Uploaded Song!!" })
     } catch (err) {
          console.log(err)
          res.status(400).json({ message: "Not uploaded" })
     }
})
app.get('/verified', verifyToken, (req, res) => {
     res.status(200).json({ message: "success" })
})
app.get('/auth/google',
     passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
     passport.authenticate('google', { failureRedirect: process.env.FRONTEND }),
     (req, res) => {
          const {authToken}=req.user;
          console.log(req.user);
          res.cookie('token_musify',String(authToken),{
               maxAge:24*60*60*7*1000*3,
           })
           res.redirect(`${process.env.FRONTEND}/home`);
     });
app.listen(8000, () => {
     console.log("Listening on port 8000");
});
