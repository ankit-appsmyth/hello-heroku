//packages needed
var express = require('express');

//create an express app
var app = express();

// set our port
var port = 8000;

//create instance of express router
var router = express.Router();

//log when a new request is captured
router.use(function(request, response, next) {
	console.log("Got a request");
	next();
});

var message = require('./app/hello.js');
//default route
router.get('/', function (request, response) {
	response.writeHead(200, {
		"Content-type" : "text/json"
	});
	response.end("Hello World");
});

//route on the resource 'message'
router.route('/message')
		.get(function(request, response){
			response.json(message.getMsg());
		});


//rgister router with app
app.use('/api', router);

//START server
app.listen(port);
console.log("Listening on port : " + port);