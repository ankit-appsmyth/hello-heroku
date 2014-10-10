var assert = require("assert");
var superagent = require('superagent')

describe('first', function () {
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
		var url = 'http://localhost:'+(process.env.PORT || 8000)+'/';
		console.log('url', url);
		superagent.get(url)
			.end(function (e,res){
				console.log(res);
				done();
			});
	});
});