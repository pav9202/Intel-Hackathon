var stepsToday = function() {
	
	var step = '1,2,3,2,5,6,15,8,8,9';
	var timestamp = "2012-09-29 14:04:59:612,2012-09-29 15:04:59:612,2012-09-29 15:04:59:612,2012-09-29 17:04:59:612,2012-09-29 18:04:59:612,2012-09-29 19:04:59:612,2012-09-29 20:04:59:612,2012-09-29 21:04:59:612,2012-09-29 22:04:59:612,2012-09-29 23:04:59:612";	
	var s1 = step.split(',');
	var steps = [];
	var t1 = timestamp.split(',');
	var timestamps = [];
	var lastone = "";
	var maxWeight = 0;
	var d = new Date();
	for(i = 0;i<t1.length;i++){
		var t2 = t1[i].split(" ");
		var t3 = t2[1].split(":");
		var t4 = t2[0].split('-');
		
		if(t3[0]!= lastone && parseInt(t4[2],10)==parseInt(d.toDateString().split(" ")[2],10)){
		//alert(t3[2]);
			if(parseInt(lastone,10) != parseInt(t3[0],10)-1){
				for(z=parseInt(lastone,10)+1;z<parseInt(t3[0],10);z++){
					steps.push(0);
					timestamps.push('');
				}
			}
			lastone = t3[0];
			steps.push(s1[i]);
			if(parseInt(s1[i],10)>maxWeight){
				maxWeight = parseInt(s1[i],10);
			}
			timestamps.push(t3[0]+':00');
		}
	}


	var ticks = timestamps;


	$.jqplot('chart2', [steps], {
		title: 'Today\'s Steps by the Hour',
		seriesDefaults : {
			renderer : $.jqplot.BarRenderer,
			color: '#76EE00',
			pointLabels : {
				show : true
			}
		},
		grid:{
			drawGridLines: false,
			gridLineColor: '#FFFFFF'
		},
		axes : {
			xaxis : {
				renderer : $.jqplot.CategoryAxisRenderer,
				ticks : ticks
			},
			yaxis : {
				max: maxWeight+2,
				min: 0
			}
		}
	});

	$('#chart2').bind('jqplotDataHighlight', function(ev, seriesIndex, pointIndex, data) {
		//$('#info2').html('series: ' + seriesIndex + ', point: ' + pointIndex + ', data: ' + data);
	});

	$('#chart2').bind('jqplotDataUnhighlight', function(ev) {
		$('#info2').html('');
	});
}; 