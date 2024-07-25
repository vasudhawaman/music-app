const router = express.Router();

router.get("/all",  getAllPosts);
router.get("/following",  getFollowingPosts);
router.get("/likes/:id",  getLikedPosts);
router.get("/user/:username",  getUserPosts);


export default router;