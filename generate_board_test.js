var generate_board = require('./generate_board.js').generate_board;
var expect = require('chai').expect;

//-----------------------------------------------------------------------------------------------------------------//

var test = {};
exports.test = test;

//-----------------------------------------------------------------------------------------------------------------//

var board = generate_board();
console.log(board);

//-----------------------------------------------------------------------------------------------------------------//

var isUniquecollection = function(allElements){
	var status = true;
	allElements.forEach(function(element){
		if(allElements.indexOf(element) != allElements.lastIndexOf(element))
			status = false;
	});
	return status;
};

//-----------------------------------------------------------------------------------------------------------------//


test['generate_board should return an array'] = function(){
	expect(board).to.be.an('array');
};

test['generate_board should return an array of 9x9'] = function(){
	expect(board.length).to.equal(9);
	board.forEach(function(row){
		expect(row.length).to.deep.equal(9);
	});
};

test['generate_board should return an array which contains 9 elements and the type of elements should be array'] = function(){
	expect(board.length).to.deep.equal(9);
	board.forEach(function(row){
		expect(row).to.be.an('array');
	});
};

test['generate_board should return an array in which each element of the array (subArray) should contains 9 elements'] = function(){
	board.forEach(function(row){
		expect(row.length).to.deep.equal(9);
	});
};

test['generate_board should return a board in which all elements in a row should be unique'] = function(){
	board.forEach(function(row){
		expect(isUniquecollection(row)).to.deep.equal(true);
	});
};

test['generate_board should return a board in which all elements in a column should be unique'] = function(){
	var dummy_board = [];
	for(var i = 0; i < board.length; i++){
		var temp = [];
		for(var j = 0; j < board[i].length; j++)
			temp.push(board[j][i]);
		dummy_board.push(temp);
	};

	dummy_board.forEach(function(row){
		expect(isUniquecollection(row)).to.deep.equal(true);
	});

};

//-----------------------------------------------------------------------------------------------------------------//

