
var min_width = 175;


$(document).ready(function(){

	recalculate(min_width);

	//Get value from user input
	$("#update").click(function(){
	 		min_width = $("#mingrid").val();
			recalculate(min_width);
	});

});

$(window).resize(function() {
	recalculate(min_width);
});



function recalculate(min_width) {

	//Variables and calculations
	var wrap_width = $(".wrapper").width();
	var col =  (wrap_width / min_width).toFixed(4);
	var col_rounded =  Math.floor(wrap_width / min_width);
	var grid_width = Math.floor(wrap_width/col_rounded);

	$('.grid').width(grid_width);


	//Displaying values
	$('#wrw').html(wrap_width + 'px');
	$('#col').html(col);
	$('#colrounded').html(col_rounded);
	$('#grid').html(grid_width + 'px');
	$('#mingrid').val(min_width);

}

