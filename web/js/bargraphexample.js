var ladida = function() {
	var s1 = [2, 6, 7, 10];
	var s2 = [7, 5, 3, 2];
	var ticks = ['a', 'b', 'c', 'd'];
	alert('I definetly did get here');
	$.jqplot('chart2', [s1, s2], {
		seriesDefaults : {
			renderer : $.jqplot.BarRenderer,
			pointLabels : {
				show : true
			}
		},
		axes : {
			xaxis : {
				renderer : $.jqplot.CategoryAxisRenderer,
				ticks : ticks
			}
		}
	});

	$('#chart2').bind('jqplotDataHighlight', function(ev, seriesIndex, pointIndex, data) {
		$('#info2').html('series: ' + seriesIndex + ', point: ' + pointIndex + ', data: ' + data);
	});

	$('#chart2').bind('jqplotDataUnhighlight', function(ev) {
		$('#info2').html('Nothing');
	});
}; 