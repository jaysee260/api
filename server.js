var http = require("http");
var https = require("https");
var fs = require("fs");
var path = require("path");

var app = require("./app");

var key = fs.readFileSync(path.resolve("certs/selfsigned.key"), "utf-8");
var cert = fs.readFileSync(path.resolve("certs/selfsigned.crt"), "utf-8");
var credentials = { key, cert };

var HTTP_PORT = process.env.HTTP_PORT || 3000;
var HTTPS_PORT = process.env.HTTPS_PORT || 5000;
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(HTTP_PORT, function() {
    console.log("HTTP Server running on PORT %s", HTTP_PORT);
})

httpsServer.listen(HTTPS_PORT, function() {
    console.log("HTTPS Server running on PORT %s", HTTPS_PORT);
})
