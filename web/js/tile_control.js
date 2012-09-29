/* 
usage: put all tiles inside the container
set the container width as you like
set all the tiles as tile class
set all data that only display when enlarge under tile-enlarge class
set all enlarge button inside the tile and class them as enlarge_button
set all diminish button inside the tile and class them as diminish_button
*/

$(document).ready(function() {
	
	$( ".tile" ).each(function(){
		var current_tile = $(this);
		var enlarged_width = $('#container').width()-$(this).outerWidth()+$(this).innerWidth();
		$(this).data('original-width',$(this).width());
		$(this).data('enlarged',false);
		$(this).find('.enlarge_button').click(function(){
			if (current_tile.data('enlarged')==false) {
				current_tile.data('enlarged',true);
				current_tile.animate({
				    width: enlarged_width
				}, 1000, function() {
			 		// Animation complete.
					current_tile.find('.tile-enlarge').show();
			});
			}
		});
		$(this).find('.diminish_button').click(function(){
			if (current_tile.data('enlarged')==true) {
				current_tile.data('enlarged',false);
				current_tile.find('.tile-enlarge').hide();
				current_tile.animate({
					width: current_tile.data('original-width')
				}, 1000, function() {
					// Animation complete
				});
			}
		});
	}).resizable({
				containment: "#container"
	});
});