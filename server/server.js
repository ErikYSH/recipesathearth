/* ===== External Modules ===== */
const express = require("express");


/* ===== Internal Modules ===== */

/* ===== Instanced Modules ===== */
const app = express()


const config = require('@recipeathearth/config')

/* ===== Server Listener ===== */
app.listen(config.PORT, () => {
    console.log(`Recipie At Hearth is live on http://localhost:${config.PORT}`)
})