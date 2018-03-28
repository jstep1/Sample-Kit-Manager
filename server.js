var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var connection = require("./config/connection.js");

var app = module.exports = express();

app.use("/public", express.static('public'));

var session = require("express-session");

app.use(session({ secret: "app", resave: false, saveUninitialized: true, cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 } }));

app.use(bodyParser.urlencoded({ extended: true }));

// Set Handlebars.
var exphbs = require("express-handlebars");

var hbs = exphbs.create({
    helpers: {
        dateConversion: function (element) {
            var options = {
                year: "numeric", month: "short",
                day: "numeric", hour: "2-digit", minute: "2-digit"
            };
            return element.toLocaleDateString("en-us", options);
        }
    },
    defaultLayout: "main"
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Begin express routes

app.get("/", function(req, res) {
    res.render("index");
})

app.get("/rep", function(req, res) {

    var repnum = 00000000;
    var query = "SELECT * FROM reps WHERE repnum=" + repnum;

    res.render("viewrep");    
})


// Set server to listen

var port = process.env.PORT || 8888;
app.listen(port, function(error){
    if (error) throw error;
    console.log('Connected on PORT ' + port);
});
