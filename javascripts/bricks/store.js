var Store = function(){
	this.tracks = [];
}

Store.prototype.save_track = function(brick_array){
	var brick_values = brick_array.map(this.get_data_for_brick);
	var trackJSON = JSON.stringify(brick_array);

	this.tracks.push(trackJSON);
	return this.tracks.length - 1;
}

Store.prototype.get_data_for_brick = function(brick){
	var values = {};
	values.column = brick.column;
	values.row = brick.row;
	values.type = brick.type;
	values.rotation = brick.rotation;
	return values;
}
