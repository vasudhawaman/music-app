const jwt = require('jsonwebtoken');
const env = require('dotenv');
env.config();
const JWT_SECRET = process.env.JWT_SECRET;
function verifyToken(req, res, next) {
      const token = req.cookies.token_musify;
   if (!token) return res.status(401).json({ error: 'Access denied' });
  try {
    const {user} = jwt.verify(token,JWT_SECRET);
    req.id=user.id;
    next();
    } catch (error) {
      const {user} = jwt.verify(token,JWT_SECRET);
    res.status(401).json({ error: 'Invalid token' });
    }
 }
 module.exports = verifyToken