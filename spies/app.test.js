const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app'); // to be able to make db.saveUser a spy function

describe('App', () => {

	var db = {
		saveUser: expect.createSpy()
	};

	app.__set__("db", db); // in app.js, make db refer to this object right here and not the db.js file

	it('should call the spy correctly', () => {
		var spy = expect.createSpy();
		spy('Andrew', 25);

		expect(spy).toHaveBeenCalledWith('Andrew', 25);
	});

	it('should call saveUser with user object', () => {
		var email = 'kuchbhi';
		var password = '123';

		app.handleSignup(email, password);

		expect(db.saveUser).toHaveBeenCalledWith({
			email,
			password
		});
	});

});