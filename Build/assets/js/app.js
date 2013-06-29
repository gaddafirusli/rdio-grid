$(document).ready(function(){
	recalculate()
});

$(window).resize(function() {
	recalculate()
});


function recalculate() {

	//Variables and calculations
	var grid_width = $('.grid').width();
	var wrap_width = $('.wrapper').width();
	var min_width = 200;
	var col =  (wrap_width / min_width);
	var col_rounded =  Math.round(wrap_width / min_width);
	$('.grid').width((wrap_width/col_rounded)-20);

	//Displaying values
	$('#ww').html(wrap_width);
	$('#col').html(col);
	$('#colrounded').html(col_rounded);
	$('#grid').html(wrap_width/col_rounded);

}