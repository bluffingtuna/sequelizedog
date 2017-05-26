var express= require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var PORT = process.env.PORT || 3000;
var app = express();
//create static folder
app.use(express.static(__dirname + "/views"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));

//Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
	
// Requiring our models for syncing
var db = require("./models");

require("./routes/api-routes.js")(app);


// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});