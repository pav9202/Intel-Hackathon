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
		var enlarged_width = $('#tilesContainer').width()-$(this).outerWidth()+$(this).innerWidth();
		var enlarged_height = $(this).innerHeight() * Math.ceil(enlarged_width/$(this).innerWidth());
		/*$(this).data('original-height',$(this).height());*/
		$(this).data('original-width',$(this).width());
		$(this).data('enlarged',false);
		$(this).find('.enlarge_button').click(function(){
			console.log('enlarge');
			if (current_tile.data('enlarged')==false) {
				current_tile.data('enlarged',true);
				current_tile.animate({
				    width: enlarged_width /*,height: enlarged_height*/
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
					width: current_tile.data('original-width')  /*,height: current_tile.data('original-height')*/
				}, 1000, function() {
					// Animation complete
					current_tile.find('.tile-enlarge').hide();
				});
			}
		});
		$(this).resizable({
			containment: "#tilesContainer"
		});
	});
	
	$( ".tileWithPlot" ).each(function(){
		var current_tile = $(this);
		var enlarged_width = $('#tilesContainer').width()-$(this).outerWidth()+$(this).innerWidth();
		var enlarged_height = $(this).innerHeight() * Math.ceil(enlarged_width/$(this).innerWidth());
		/*$(this).data('original-height',$(this).height());*/
		$(this).data('original-width',$(this).width());
		$(this).data('enlarged',false);
		$(this).find('.enlarge_button').click(function(){
			console.log('enlarge');
			if (current_tile.data('enlarged')==false) {
				current_tile.data('enlarged',true);
				current_tile.animate({
				    width: enlarged_width /*,height: enlarged_height*/
				}, 1000, function() {
			 		// Animation complete.
					if (current_tile.data('plottype') == '1') {
						$('#stepWeek').empty();
						stepsThisWeek();
					} else if	(current_tile.data('plottype') == '2') {
						$('#stepToday').empty();
						stepsToday();
					} else if	(current_tile.data('plottype') == '3') {
						currencyOverTime();
					} else if 	(current_tile.data('plottype') == '4') {
						weightlossOverTime();
					}
					current_tile.find('.tile-enlarge').show();
			});
			}
		});
		$(this).find('.diminish_button').click(function(){
			if (current_tile.data('enlarged')==true) {
				current_tile.data('enlarged',false);
				current_tile.find('.tile-enlarge').hide();
				current_tile.animate({
					width: current_tile.data('original-width') /*, height: current_tile.data('original-height')*/
				}, 1000, function() {
					// Animation complete
					if (current_tile.data('plottype') == '1') {
						$('#stepWeek').empty();
						stepsThisWeek();
					} else if	(current_tile.data('plottype') == '2') {
						$('#stepToday').empty();
						stepsToday();
					} else if	(current_tile.data('plottype') == '3') {
						currencyOverTime();
					} else if 	(current_tile.data('plottype') == '4') {
						weightlossOverTime();
					}
					current_tile.find('.tile-enlarge').hide();
				});
			}
		});
		$(this).resizable({
			containment: "#tilesContainer"
		});
	});
	
	
});