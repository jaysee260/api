// Create express application instance
var app = require("express")();

// Import controllers
var homeController = require("./src/controllers/home");

// Register route actions
app.get("/", homeController.index);



module.exports = app;
