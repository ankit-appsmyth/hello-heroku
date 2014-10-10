//packages needed
var express = require('express');
var bodyParser = require('body-parser');

//create an express app
var app = express();

// set our port
var port = 8000;

//create instance of express router
var router = express.Router();

//log when a new request is captured
router.use(function(request, response, next) {
	console.log("Got a request");
	console.log("Method",request.method);
	response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST,  PUT, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    response.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

var message = require('./app/hello.js');
//default route
router.get('/', function (request, response) {
	sendMyRes(response, "Hello World");
	//response.end("Hello World");
});

//route on the resource 'message'
router.route('/message')
		.get(function(request, response){
			message.getMsg(function(responseMessage){
				
				sendMyRes(response, JSON.stringify(responseMessage));
			
			});
			//response.json(message.getMsg());
		});

//route on the resource 'message'
router.route('/db')
		.get(function(request, response){
			response.json(message.addUser());
		});

//route on the resource 'message'
router.route('/trans')
		.get(function(request, response){
			//console.log(request.query.lang);
			response.end(message.getTrans(request.query.lang));
		});

router.route('/posttest')
		.get(function(request, response){
			console.log("data recived:",request.body);
	        response.json(message.getMsg());
		})
		.put(function(request, response){
			console.log("data recived:",request.body);
	        response.json(message.getMsg());
		})
		.options(function(request, response){
			console.log("data recived:",request.body);
			response.json({});
		})
		.delete(function(request, response){
			console.log("data recived:",request.body);
	        response.json(message.getMsg());
		})
		.post(function(request, response){
			console.log("data recived:",request.body);
	        response.json(message.getMsg());
		});


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

//common function to send back response
function sendMyRes(res, responseData){
	res.writeHead(200, {
		"Content-type" : "text/json"
	});
	res.end(responseData);
}


//rgister router with app
app.use('/api', router);

//START server
app.listen(process.env.PORT || port);
console.log("Listening on port : " + port);