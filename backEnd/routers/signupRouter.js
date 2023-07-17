const router = require("express").Router();
const {Signup} = require("../controllers/usersCon");

router.get("/:id/:pw", Signup);

module.exports = router;