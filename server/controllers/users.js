const db = require("../models");


const indexUser = (req, res) => {
    db.User.find()
    .exec((err, allUsers) => {
        return res.status(200).json({
            message: "Success!",
            data: allUsers
        })
    })
}

const createUser = (req, res) => {
    db.User.create(req.body, (err, savedUser) => {
        if(err)
        return res.status(400).json({
            message: "Failed to create a user",
            error: err,
        });
        return res.status(200).json({
            message: "Successfully created user record",
            data: savedUser,
        })
    })
}


const showUser = (req, res) => {
    db.User.findById(req.params.id)
        .exec((err, foundUser) => {
        if(err)
            return res.status(400).json({
                message: "Failed to find a user",
                error: err,
            });
            return res.status(200).json({
                message: "User found",
                data: foundUser,
            });
    });
};

const updateUser = (req, res) => {
    let userData;
    if(req.file !== undefined){
        userData = { 
            name: req.body.name,
            username: req.body.username,
            img_url: req.body.img_url,
            email: req.body.href,
            password: req.body.password,
        }
    } else {
        userData = {
            display_name: req.body.name,
            external_urls: req.body.externalurls,
            href: req.body.href,
            id: req.body.id,
            uri: req.body.uri,
        }
    }

    db.User.findByIdAndUpdate(
        req.params.id,
        userData,
        { new: true },
        (err, updatedUser) => {
            if(err)
                return res.status(400).json({
                    message: "Failed to update user info",
                    error: err
                });
                return res.status(202).json({
                    message: "Successfully updated user info",
                    data: updatedUser,
                });
        }
    );
};

const destroyUser = (req, res) => {
    db.User.findByIdAndDelete(req.params.id, (err, deletedUser) =>{
        if(err)
        return res.status(400).json({
            message: "Failed to delete user",
            error: err
        });
        return res.status(200).json({
            message: "User permanently deleted",
            data: deletedUser,
        });
    });
}



module.exports = {
    indexUser,
    createUser,
    showUser,
    updateUser,
    destroyUser,
}