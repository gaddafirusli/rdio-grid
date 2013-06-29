$(document).ready(function(){
	recalculate()
});

$(window).resize(function() {
	recalculate()
});


function recalculate() {

	//Variables and calculations
	//var grid_width = $('.grid').outerWidth();
	var body_width = $(window).width();
	var wrap_width = $(".wrapper").width();

	var min_width = 220;
	var col =  (wrap_width / min_width);
	var col_rounded =  Math.round(wrap_width / min_width);
	var grid_width = ((wrap_width/col_rounded)-40);

	$('.grid').width(grid_width);


	//Displaying values
	$('#wrw').html(wrap_width);
	$('#ww').html(body_width);
	$('#col').html(col);
	$('#colrounded').html(col_rounded);
	$('#grid').html(grid_width);

}