const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {

	describe('#add', () => { // nesting of describe blocks is allowed
		it('should add two numbers', () => {
			var res = utils.add(33, 11);

			// if (res !== 44){
			// 	throw new Error(`Expected 44, but got ${res}`);
			// } // now we learn to use an assertion library

			expect(res).toBe(44).toBeA('number');
		});

		it('should async add two numbers', (done) => {
			utils.asyncAdd(4, 3, (sum) => {
				expect(sum).toBe(7).toBeA('number');
				done();
			});
		});
	});

	it('should square a number', () => {
		var res = utils.square(5);

		expect(res).toBe(25).toBeA('number');
	});

	it('should async square a number', (done) => {
		utils.asyncSquare(9, (square) => {
			expect(square).toBe(81).toBeA('number');
			done();
		});
	});
});

it('should set first and last names', () => {
	var user = {
		'age': 19,
		'location': 'India'
	};

	var res = utils.setName(user, 'Dhruv Agarwal');

	expect(res).toInclude({
		firstName: 'Dhruv',
		lastName: 'Agarwal'
	}).toBeA('object');
});

// it('should expect some values', () => {
// 	// expect(12).toNotBe(12);
// 	// expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
// 	// expect([2,3,4,5]).toInclude(5);
// 	// expect([2,3,4,5]).toInclude(1);
// 	expect({
// 		name: 'Dhruv',
// 		age: 19,
// 		location: 'India'
// 	}).toInclude({ // similarly, toExclude
// 		age: 19
// 	});
// });