var create_user_board = require('./create_user_board.js').create_user_board;
var generate_board = require('./generate_board.js').generate_board;

var expect = require('chai').expect;

//---------------------------------------------------------------------------------------------------------------//

var test = {};
exports.test = test;

//---------------------------------------------------------------------------------------------------------------//

var board = generate_board();
var user_board = create_user_board(board);

//---------------------------------------------------------------------------------------------------------------//

test['create_user_board should return an array'] = function(){
	expect(user_board).to.be.an('array');
};

test['create_user_board should return an array of 9x9'] = function(){
	expect(user_board.length).to.equal(9);
	user_board.forEach(function(row){
		expect(row.length).to.deep.equal(9);
	});
};

test['create_user_board should contain values only in 32 fields'] = function(){
	var count = 0;
	user_board.forEach(function(row){
		row.forEach(function(element){
			if(element != undefined && typeof element == 'number')
				count++;
		});
	});
	expect(count).to.equal(32);
};

test['create_user_board should contain 81-32 = 49 undefined values'] = function(){
	var count = 0;
	user_board.forEach(function(row){
		row.forEach(function(element){
			if(element) count++;
		});
	});
	expect(81 - count).to.equal(49);
};

//---------------------------------------------------------------------------------------------------------------//
