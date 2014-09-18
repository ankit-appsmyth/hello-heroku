var assert = require("assert");

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
});