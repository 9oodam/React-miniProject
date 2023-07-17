const router = require("express").Router();
const {getPost, addPost, moveToEdit, editPost, deletePost} = require("../controllers/boardCon");
const {isLogin} = require("../middleware/isLogin")

router.get("/", getPost)

router.get("/add/:id/:ti/:de/:da", isLogin, addPost);
router.get("/selected/:id", moveToEdit);
router.get("/edit/:id/:ti/:de", editPost);
router.get("/del/:id", deletePost);

module.exports = router;