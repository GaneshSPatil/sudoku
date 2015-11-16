//program to randomly generate the puzzle

var generate_number = function(){
	var num = Math.round(Math.random() * 9 );
	if( num > 0 && num < 10)
		return num;
	return generate_number();
};

var get_square_number = function(horizontal_pos, vertical_pos){
	var search_pattern = '' + horizontal_pos + vertical_pos;
	switch(search_pattern){
		case '11' :
		case '21' :
		case '31':
		case '12':
		case '22':
		case '32':
		case '13':
		case '23':
		case '33':
			return 0;
		case '41' :
		case '51' :
		case '61':
		case '42':
		case '52':
		case '62':
		case '43':
		case '53':
		case '63':
			return 3;
		case '71' :
		case '81' :
		case '91':
		case '72':
		case '82':
		case '92':
		case '73':
		case '83':
		case '93':
			return 6;

		case '14' :
		case '24' :
		case '34':
		case '15':
		case '25':
		case '35':
		case '16':
		case '26':
		case '36':
			return 1;
		case '44' :
		case '54' :
		case '64':
		case '45':
		case '55':
		case '65':
		case '46':
		case '56':
		case '66':
			return 4;
		case '74' :
		case '84' :
		case '94':
		case '75':
		case '85':
		case '95':
		case '76':
		case '86':
		case '96':
			return 7;

		case '17' :
		case '27' :
		case '37':
		case '18':
		case '28':
		case '38':
		case '19':
		case '29':
		case '39':
			return 2;
		case '47' :
		case '57' :
		case '67':
		case '48':
		case '58':
		case '68':
		case '49':
		case '59':
		case '69':
			return 5;
		case '77' :
		case '87' :
		case '97':
		case '78':
		case '88':
		case '98':
		case '79':
		case '89':
		case '99':
			return 8;
	};
};

var fill_board = function(){
	var horizontal = [ [], [], [], [], [], [], [], [], []];
	var vertical = [ [], [], [], [], [], [], [], [], []];
	var square = [ [], [], [], [], [], [], [], [], []];
	for(var i =0; i < 9; i++){
		var sameCount = 0;
		var flag = true;
		while(flag){
			var number_to_insert = generate_number();
			var vertical_column_number = horizontal[i].length;
			var square_pos = get_square_number(i+1, vertical_column_number + 1);
			
			var condition_1 = horizontal[i].indexOf(number_to_insert) == -1;
			var condition_2 = vertical[vertical_column_number].indexOf(number_to_insert) == -1;
			var condition_3 = square[square_pos].indexOf(number_to_insert) == -1;
			if(condition_1 && condition_2 && condition_3){
				vertical[vertical_column_number][i] = number_to_insert ;
				if(horizontal[i].push(number_to_insert) == 9){
					flag = false;
				};
				square[square_pos].push(number_to_insert);
			}else{
				sameCount++;
				if(sameCount == 200){
					return fill_board();
				};
			};
		};
		
		
	};
	return horizontal;
};

exports.generate_board = fill_board;