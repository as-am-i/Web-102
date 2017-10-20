function shuffle(arr) {
	for(let row = 0; row < arr.length; row++) {
		for(let col =0; col < arr[row].length; col++) {
			var randomRow = Math.floor(Math.random()*(row+1));
			var randomCol = Math.floor(Math.random()*(col+1));
			// the reason why we use (row+1) is the last number of range is exclusive

			// get that item's content
			var itemAtIndex = arr[randomRow][randomCol];

			// swap the content
			// the position = contents
			arr[randomRow][randomCol] = arr[row][col];
			arr[row][col] = itemAtIndex
		}
	}
	return arr;
}


var states = [[3,8,6],[7,"",2],[1,4,5]];
shuffle(states);


function getEmptyPosition(states) {
    var empty = [];
    for(let row = 0; row < states.length; row++) {
    	for (let col = 0; col < states[row].length; col++) {
    		if (states[row][col] == "") {
            empty.push(row, col);
            return empty;
            // whenever the loop finds return, it will break
			}
		}
    }
}


