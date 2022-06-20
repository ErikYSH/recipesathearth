const db = require("../models");

const createRecipe = (req, res) => {
    db.Recipe.create(req.body, (err, savedRecipe) => {
        if (err)
        return res.status(400).json({
            message: "Failed to create a recipe.",
            error: err,
        });
        return res.status(200).json({
            message: "Successfully created a recipe.",
            data: savedRecipe,
        })
    })
}

const destroyRecipe = (req, res) => {
    db.Recipe.findByIdAndDelete(req.params.id, (err, deletedRecipe) => {
        if(err)
        return res.status(400).json({
            message: "Failed to delete recipe.",
            error: err,
        })
        return res.status(200).json({
            message: "Successfully deleted a recipe.",
            data: deletedRecipe,
        });
    });
}

//updateRecipe here. still to determine what fields to edit given cloudinary data


module.exports = {
    createRecipe,
    destroyRecipe,
}