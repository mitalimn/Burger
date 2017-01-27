//Here you set up the model for how
//to interface with the database

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
	all : function(cb){
		// body...
		orm.all('burgers', function(res){
			cb(res);
		});
	},

	//cols and values are arrays

	create : function(cols, vals, cb){
		orm.create('burgers',cols, vals, function(res){
			cb(res);
		})
	},

	update : function(objColVals, condition, cb){
		orm.update('burgers', objColVals, condition, function(res){
			cb(res);
		})
	}
};//end burger object


module.exports = burger;
