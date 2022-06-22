const router = require("express").Router();
const {recipes} = require("../controllers");

router.post("/", recipes.createRecipe);
router.delete("/:id", recipes.destroyRecipe);


module.exports = router;