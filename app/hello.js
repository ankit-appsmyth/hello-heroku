var cql = require('node-cassandra-cql');

var i18n = require("i18n");

i18n.configure({
    locales:['en', 'de'],
    defaultLocale: 'en',
    directory: __dirname + '/../locales'
});

var client = new cql.Client({hosts: ['127.0.0.1:9042'], keyspace: 'first', username: 'cassandra', password: 'cassandra'});

var message = {
    status:"success",
	msg:"This is msg comes from database",
	envVar:"HE'EEY!!!",

    getMsg: function () {
        return {
					"status":this.status,
					"msg":this.msg,
					"envVar":this.envVar
				};
    },

    addUser: function(){
    	client.execute("insert into users (userId,email,phoneNo,zip, dob, gender) values (uuid(),'abc@dfg.com','1234567890','26733','1990-08-24','male');", [],

			function(err, result) {

				if (err) {
					console.log('execute failed', err);

				} else {
					console.log('sucesssssssss');
				}

			}
		);
    },

    getTrans: function (lang){
    	i18n.setLocale(lang);
    	return i18n.__('hello');

    },

    /*getMsg: function (callback) {

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
	}*/
}

module.exports = message;