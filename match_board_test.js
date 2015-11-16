var match_board = require('./match_board.js').match_board;
var generate_board = require('./generate_board.js').generate_board;
var expect = require('chai').expect;

//-----------------------------------------------------------------------------------------------------------------------//

 var test = {};
 exports.test = test;

//-----------------------------------------------------------------------------------------------------------------------//

var board = generate_board();
var another_board = generate_board();

//-----------------------------------------------------------------------------------------------------------------------//

test['match_board should return a boolean value'] = function(){
	expect(match_board(board, board)).to.be.a('boolean');
};

test['match_board should return true if both the boards are equal'] = function(){
	expect(match_board(board, board)).to.equal(true);
};

test['match_board should return false if both the boards are not equal'] = function(){
	expect(match_board(board, another_board)).to.equal(false);
};

//-----------------------------------------------------------------------------------------------------------------------//
