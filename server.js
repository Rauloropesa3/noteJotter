// dependencies
const express=require("express");
const util=require("util");
const fs=require("fs");
const inquirer=require("inquirer")

const app = require("express")

// connection to the client
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./routes/routes.js")(app);

// starting express app
app.listen(PORT, 'localhost', function() {
    console.log("Apps listening on PORT" + PORT);
  });

app();