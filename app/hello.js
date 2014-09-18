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
    }
}

module.exports = message;