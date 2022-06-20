const router = require("express").Router();
const {recipes} = require("../controllers");

router.post("/", users.createRecipe);
router.delete("/:id", users.destroyRecipe);


module.exports = router;