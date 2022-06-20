const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const mealTypeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    recipes: [recipeSchema],

});

const MealType = mongoose.model("MealType", mealTypeSchema);

module.exports = MealType;