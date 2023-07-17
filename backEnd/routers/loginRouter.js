const router = require("express").Router();
const {Login} = require("../controllers/usersCon");

router.get("/:id/:pw", Login);

module.exports = router;