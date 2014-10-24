//Grid definition
var Grid = function(width, height, cell_size){
	this.width = width;
	this.height = height;
	this.cell_size = cell_size;

	this.bricks = []
}

Grid.prototype.draw = function(context){
	this.draw_grid(context);
	for(var i =0;i<this.bricks.length;i++){
		this.bricks[i].draw(context);	
	}
}

Grid.prototype.draw_grid = function(context){
	context.strokeRect(0,0,this.width, this.height);
	var number_of_columns = this.width/this.cell_size;
	var number_of_rows = this.height/this.cell_size;
	console.log(number_of_columns);
	console.log(number_of_rows);
	context.beginPath();

	for(var column=0;column<number_of_columns; column++){
		context.moveTo(column*this.cell_size, 0);
		context.lineTo(column*this.cell_size, grid_height);
	}
	for(var row=0;row<number_of_rows;row++){
		context.moveTo(0, row*this.cell_size);
		context.lineTo(grid_width, row*this.cell_size);
	}

	context.stroke();
}

Grid.prototype.add_brick = function(brick, context){
	//add brick to array of bricks contained in the grid
	this.bricks.push(brick);
	brick.draw(context);
}

Grid.prototype.get_brick_at = function(column, row){
	for(var i=0;i<this.bricks.length;i++){
		if(this.bricks[i].column == column && this.bricks[i].row == row){
			return this.bricks[i];
		}
	}
	return null;
}

Grid.prototype.clear = function(){
	this.bricks = [];
}
