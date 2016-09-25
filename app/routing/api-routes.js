var friendData = require('../data/friends.js');

module.exports = function(app) {
	app.get('/api/friends', function (req, res) {
		console.log(friendData);
		res.json(friendData);
	});

	app.post('/api/friends', function (req, res) {
		var newFriend = req.body;

		console.log(
			'POSTED' +
			"\nname: " + newFriend.name +
			"\nimage: " + newFriend.image +
			"\nscores: " + newFriend.scores
		);

		var bestMatch = friendData[combatibilityCheck(newFriend.scores)];
		console.log(
			'BESTMATCH' +
			"\nname: " + bestMatch.name +
			"\nimage: " + bestMatch.image +
			"\nscores: " + bestMatch.scores
		);
		res.json(bestMatch);//send compatible match JSON
	});

	function combatibilityCheck(userScores) {

		var bestMatchDiff = 50;//initialize best match diff at worst possible value
		var bestMatchIndex = 0;//intialize best match index as first profile index

		//loop through existing profiles
		for (var i = 0; i < friendData.length; i++) {
			var friend = friendData[i];

			//loop through existing profile's scores and new user's scores
			var totalDiff = 0;
			for (var j = 0; j < friend.scores.length; j++) {
				var s1 = friend.scores[j];
				var s2 = userScores[j];
				totalDiff += Math.abs(s1 - s2);//add diff for individual film to total diff
			}

			//exit on perfect match
			if(totalDiff === 0) {
				return i;
			}

			if(totalDiff < bestMatchDiff) {
				bestMatchDiff = totalDiff;//update, new best match found 
				bestMatchIndex = i;
			}
		}
		return bestMatchIndex;
	}
};