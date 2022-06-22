const mongoose = require("mongoose");
const db = mongoose.connection;
const dbUrl = process.env.MONGO_URL;

mongoose
    .connect(dbUrl)
    .then(() => {
        console.log(
            `MongoDB connected at ${db.host}:${db.port}!`
        )
    })
    .catch((err) => console.log(`Failed MongoDB Connection at Error: ${err}`))

    module.exports = {
        User: require("./User"),
        Recipe: require("./Recipe"),

    }