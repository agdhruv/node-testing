const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app'); // to be able to make db.saveUser a spy function

describe('App', () => {

	it('should call the spy correctly', () => {
		var spy = expect.createSpy();
		spy('Andrew', 25);

		expect(spy).toHaveBeenCalledWith('Andrew', 25);
	});

});