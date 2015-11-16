var generate_number = function(from, to){
	var num = Math.round(Math.random() * to );
	if( num >= from && num <= to)
		return num;
	return generate_number(from, to);
};

var genearte_empty_array = function(size){
	return new Array(size);
};

var create_user_board = function(actualBoard){
	var user_board = [];
	for(var i = 0; i < 9; i++){
		user_board.push(genearte_empty_array(9));
	};

	var count = 0;
	var from = 0;
	var to = 8;

	while(count < 32){
		var row = generate_number(from, to);
		var column = generate_number(from, to);
		if(!user_board[row][column]){
			user_board[row][column] = actualBoard[row][column];
			count++;
		};
	};

	for(var i = 0; i < user_board.length; i++){
		if(user_board[i].toString() == genearte_empty_array(9).toString())
			return create_user_board(actualBoard);
	};

	return user_board;
};

exports.create_user_board = create_user_board;