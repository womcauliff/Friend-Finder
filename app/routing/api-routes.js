var friendData = require('../data/friends.js');

module.exports = function(app) {
	app.get('/api/friends', function (req, res) {
		console.log(friendData);
		res.json(friendData);
	});

	app.post('/api/friends', function (req, res) {
		var newFriend = req.body;
		console.log('POSTED' + newFriend);
	});
};