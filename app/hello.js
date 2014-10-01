var message = {
    status:"success",
	msg:"This is msg comes from database",
	envVar:"HE'EEY!!!",
    getMsg: function (callback) {

    	console.log("going to sleep");

    	var that = this;

    	setTimeout(function() {
	  		console.log('bayck!');
	  		
	  		responseData = {
				"status" : that.status,
				"msg" : that.msg,
				"envVar" : that.envVar
			};

	  		callback(responseData);
		}, 5000);
        
    	return true;

    }
}

module.exports = message;