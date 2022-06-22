const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const recipeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    prep_time: {
        type: Number,
    },
    portion: {
        type: String,
    },
    image: {
        type: String,
    },
    ingredients: [
        {type: String}
    ],
    instructions: {
        type: String,
    },
    
    user: [{ type: Schema.Types.ObjectId, ref: "User" }],
    meal_type: [{type: String}],



});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;