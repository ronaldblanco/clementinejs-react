var Users = require('../models/users.js');
var url = require("urlparser");

function DataHandler () {
	
	this.getDatas = function (req, res) {
		Users
			.findOne({ 'github.id': req.user.github.id }, { '_id': false })
			.exec(function (err, result) {
				if (err) { throw err; }
				console.log(result.info);
				res.json(result.info);
			});
	};

	this.addData = function (req, res) {
		
		var myUrl = url.parse(req.originalUrl);
		
		var newData = {'name': unescape(myUrl.query.params.name)};
		Users
			.findOneAndUpdate({ 'github.id': req.user.github.id }, { $push: { 'info.data': newData } })
			.exec(function (err, result) {
					if (err) { throw err; }
					console.log(result.info)
					res.json(result.info);
				}
			);		
   
	};

	this.deleteData = function (req, res) {
		var myUrl = url.parse(req.originalUrl);
		
		Users
			.findOneAndUpdate({ 'github.id': req.user.github.id }, { $pull: { 'info.data': { name:unescape(myUrl.query.params.name)} }  })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.info);
				}
			);
	};
	
	this.getAllDatas = function (req, res) {
		Users
			.find({}, {})
			.exec(function (err, result) {
				if (err) { throw err; }
				
				var final = [];
				result.forEach(function(user){
					user.info.data.forEach(function(data){
						final.push(data);
					});
					
				});
				//console.log(final);
				res.send(final);
			});
	};

}

module.exports = DataHandler;