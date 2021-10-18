const express = require("express");
const mongoose = require("mongoose")
const ejs = require("ejs");

const app = express()

const PORT = process.env.PORT || 5000


// TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json())

// ROUTES
app.get("/", (req,res) => {
  res.send("<h1>Index page</h1>")
})




// LISTEN
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})