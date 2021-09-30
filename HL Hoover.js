//function to convert the string values of the coordinates to integers
function integerize_coordinates(coordinate){
	var x_coordinate;
	var y_coordinate;
	var int_coordinate = [];
	x_coordinate = parseInt(coordinate[0]);
	y_coordinate = parseInt(coordinate[1]);
	int_coordinate[0] = x_coordinate;
	int_coordinate[1] = y_coordinate;
	return int_coordinate;
}

//function to initialize the grid value
function init_grid(lines){
	var grid = integerize_coordinates(lines[0].split(' '));
	return grid;
}

//function to initialize the location value
function init_location(lines){
	var location = integerize_coordinates(lines[1].split(' '));
	return location;
}

//function to initialize the direction commands
function init_direction(lines){
	return lines[lines.length-1]
}

//function to initialize the list of dirty spots
function init_dirty_spots(lines){
	var dirty_spots = [];
	var i = 2;
	var dirty_coordinate = [];
	while (i<lines.length-1){
		dirty_coordinate = integerize_coordinates(lines[i].split(' '));
		dirty_spots[i-2] = dirty_coordinate;
		i++;
	}
	return dirty_spots;
}

//function to analyze the list of coordinates from the direction commands
function analyze_direction(grid,location,direction){
	var clean_coordinates = [];
	//assign the initial position of the hoover
	var init_x_coordinate = location[0];
	var init_y_coordinate = location[1];
	var init_coordinate = [];
	for(i=0;i<direction.length;i++){
		var x_coordinate;
		var y_coordinate;
		var coordinate = [];
		if(i==0){
			//the starting location is provided by the location value
			init_coordinate[0] = init_x_coordinate;
			init_coordinate[1] = init_y_coordinate;
			clean_coordinates[i] = init_coordinate;
		} else {
			//subsequent steps will start from the previous step of the movement
			x_coordinate = clean_coordinates[i-1][0];
			y_coordinate = clean_coordinates[i-1][1];
			coordinate[0] = x_coordinate;
			coordinate[1] = y_coordinate;
			clean_coordinates[i] = coordinate;
		}
		//check which direction it's going
		if(direction.substring(i,i+1)=='N'){
			if(clean_coordinates[i][1]<grid[1]){
				clean_coordinates[i][1] = clean_coordinates[i][1]+1;
			}
		} else if(direction.substring(i,i+1)=='S'){
			if(clean_coordinates[i][1]!==0){
				clean_coordinates[i][1] = clean_coordinates[i][1]-1;
			}
		} else if(direction.substring(i,i+1)=='E'){
			if(clean_coordinates[i][0]<grid[0]){
				clean_coordinates[i][0] = clean_coordinates[i][0]+1;
			}
		} else if (direction.substring(i,i+1)=='W'){
			if(clean_coordinates[i][0]!==0){
				clean_coordinates[i][0] = clean_coordinates[i][0]-1;
			}
		}
	}
	return clean_coordinates;
}

//function to compare the coordinates of the hoover's movement to the dirty spots to count the number of dirty spots cleaned
function count_dirty_spots_cleaned(dirty_spots,clean_coordinates){
	var count = 0;
	var clean_x_coordinate;
	var clean_y_coordinate;
	var dirty_x_coordinate;
	var dirty_y_coordinate;
	i = 0;
	while(i<dirty_spots.length){
		j = 0;
		dirty_x_coordinate = dirty_spots[i][0];
		dirty_y_coordinate = dirty_spots[i][1];
		while(j<clean_coordinates.length){
			clean_x_coordinate = clean_coordinates[j][0];
			clean_y_coordinate = clean_coordinates[j][1];	
			//when both x and y coordinates are equal, increase the count and i variables and break out of the inner while loop
			if(dirty_x_coordinate==clean_x_coordinate&&dirty_y_coordinate==clean_y_coordinate){
				count++;
				i++;
				break;
			}
			j++;
		}
		i++;
	}
	return count;
}

//initialize the variables
var grid;
var location;
var dirty_spots = [];
var direction;
var clean_coordinates = [];
var number_of_spots_cleaned;

var fs = require('fs');

fs.readFile('./input.txt', 'utf8', function(err,data) {
	if (err) throw err;
	//read the file and put them in the array by line
	var lines = data.split(/\r?\n/);
	
	//call functions and assign the return values of the function to each variables defined
	grid = init_grid(lines);
	location = init_location(lines);
	direction = init_direction(lines);
	dirty_spots = init_dirty_spots(lines);
	clean_coordinates = analyze_direction(grid,location,direction);
	number_of_spots_cleaned = count_dirty_spots_cleaned(dirty_spots,clean_coordinates);

	//show the last coordinate of the hoover
	console.log(clean_coordinates[clean_coordinates.length-1][0],clean_coordinates[clean_coordinates.length-1][1]);
	console.log(number_of_spots_cleaned);
});