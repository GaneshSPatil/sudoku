var matchBoard = function(actualBoard, userInput){
	for(var i = 0; i < actualBoard.length; i++){
		if(actualBoard[i].toString() != userInput[i].toString())
			return false;
	};
	return true;
};

exports.match_board = matchBoard;