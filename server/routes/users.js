const router = require("express").Router();
const {users} = require("../controllers");

router.get("/", users.indexUser);
router.post("/", users.createUser);
router.get("/:id", users.showUser);
router.put("/:id", users.updateUser);
router.delete("/:id", users.destroyUser);


module.exports = router;