var db = require('./db');

module.exports.handleSignup = (email, password) => {
	// check if the email already exists
	// save the user to the database
	db.saveUser({
		email, // same as email: email
		password
	});
	// send welcome email
};