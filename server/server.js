const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.status(404).send({
		error: 'Page not found.',
		name: 'Todo app v1.0'
	});
});

app.get('/users', (req, res) => {
	res.status(200).send([{
		name: 'Dhruv',
		age: 19
	}, {
		name: 'Ojas',
		age: 19
	}, {
		name: 'Sinha',
		age: 20
	}]);
});

app.listen(3000);

module.exports.app = app;