var express = require("express");
var app = express();

var port = 3000;
app.listen(port, function () {
	console.log("listening at localhost:3000");
});



var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
               ];

var colors = [
                "Red",
                "Orange",
                "Yellow",
                "Green",
                "Blue",
                "Violet",
               ];



// a "GET" request to "/" will run the function below
app.get("/", function (req, res) {
	//send back the response: 'Hello World'
	res.send("Hello World!!!!");
});

app.get("/color/:choice", function (req, res) {
	var choice = req.params.choice;
	res.sent("Your color is: " + choice);
});

app.get("/taco/:index", function (req, res) {
	var index = req.params.index;
	var choice = tacos[i];
	res.sent("The next super taco is " + choice;
});


// cafes api index route
app.get('/api/colors', function (req, res) {
  res.json(colors); // render all taquerias
});
