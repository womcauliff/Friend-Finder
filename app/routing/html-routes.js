var path = require('path');

module.exports = function(app) {

	//HTML
	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	//CSS & JS ASSETS
	app.get('/assets/js/main.js', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/assets/js/main.js'));
	});
	app.get('/assets/css/reset.css', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/assets/css/reset.css'));
	});
	app.get('/assets/css/style.css', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/assets/css/style.css'));
	});

	// If no matching route is found default to home
	app.use(function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
};