var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

app.listen(app.get('port'), function () {
	console.log('App listening on PORT ' + app.get('port'));
});