const path = require("path");
require("dotenv").config({path: "../.env"});
/* ===== External Modules ===== */
const express = require("express");
const cors = require("cors");


/* ===== Internal Modules ===== */

/* ===== Instanced Modules ===== */
const app = express();
const config = require('../packages/config');
const routes = require("./routes");

/* ===== Middleware ===== */
app.use(cors());
app.use(express.static(path.join("build")));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

/* ===== Routes & Controllers ===== */
app.use("/api", routes);
app.all("/api/*", (req, res, next) => {
    res.send("Wrong API Endpoint. Please try again");
});

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

/* ===== Server Listener ===== */
app.listen(config.PORT, () => {
    console.log(`Recipes At Hearth is live on http://localhost:${config.PORT}`)
})