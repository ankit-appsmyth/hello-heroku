var assert = require("assert");
var http = require("http");
var superagent = require('superagent')
var app = require('../index');
var port = 8000;
var server;

describe('first', function () {
	//console.log(app);
	before(function(done) {
  		//app.start(done);
  		done();
	});

	after(function(done) {
  		//if (server) server.close(done);
  		app.stop(done);
	});

 it('print hello world', function (done) {
   var message = require('../app/hello.js');
   var gotMsg = message.getMsg()
   // must call done() so that mocha know that we are... done.
   // Useful for async tests.
   //gotMsg.status.should.equal('success');
   assert.equal(gotMsg.status, 'success');
   done();
 });
	
	it('post object', function(done){
		var url = 'http://localhost:'+(process.env.PORT || 8000)+'/api';
		console.log('url', url);
		superagent.get(url)
			.end(function (e,res){
				console.log(res.body);
				if(typeof res.body != 'undefined')
				done();
			});
	});
});