var stepsThisWeek = function() {
	/*	function createRequest() {
	 var result = null;
	 if (window.XMLHttpRequest) {
	 // FireFox, Safari, etc.
	 result = new XMLHttpRequest();
	 if ( typeof xmlhttp.overrideMimeType != 'undefined') {
	 result.overrideMimeType('text/xml');
	 // Or anything else
	 }
	 } else if (window.ActiveXObject) {
	 // MSIE
	 result = new ActiveXObject("Microsoft.XMLHTTP");
	 } else {
	 // No known mechanism -- consider aborting the application
	 }
	 return result;
	 }

	 var req = createRequest();
	 req.onreadystatechange = function() {
	 if (req.readyState != 4)
	 return;
	 if (req.status != 200) {
	 //I NEED TO HANDLE THE REQUEST FAILURE HERE
	 return;
	 }
	 // request successful
	 var response = req.responseText;
	 var parsed_response = eval("(" + response + ")");
	 $.jqplot('chartdiv', [[3, 7, 9, 1, 4, 6, 8, 2, 5]], {
	 // Give the plot a title.
	 title : 'Weightloss',
	 axesDefaults : {
	 labelRenderer : $.jqplot.CanvasAxisLabelRenderer
	 },
	 // An axes object holds options for all axes.
	 // Allowable axes are xaxis, x2axis, yaxis, y2axis, y3axis, ...
	 // Up to 9 y axes are supported.
	 axes : {
	 // options for each axis are specified in seperate option objects.
	 xaxis : {
	 label : "X Axis",
	 pad : 1

	 },
	 yaxis : {
	 label : "Y Axis"
	 }
	 },
	 series : [{
	 markerOptions : {
	 style : "circle",
	 size : 20
	 }
	 }]
	 });
	 }
	 var url = '';
	 //ENTER THE REST url
	 req.open("GET", url, true);
	 req.send();
	 */
	var step = '1,2,3,2,5,6,15,8,8';
	var timestamp = "2012-09-21 14:04:59:612,2012-09-22 14:04:59:612,2012-09-23 14:04:59:612,2012-09-24 14:04:59:612,2012-09-25 14:04:59:612,2012-09-26 14:04:59:612,2012-09-28 14:04:59:612,2012-09-28 14:04:59:612,2012-09-29 14:04:59:612";
	var s1 = step.split(',');
	var steps = [];
	var t1 = timestamp.split(',');
	var timestamps = [];
	var lastone = "";
	var maxWeight = 0;
	var d = new Date();
	for(i = 0;i<t1.length;i++){
		var t2 = t1[i].split(" ");
		var t3 = t2[0].split("-");
		
		if(t3[2]!= lastone && parseInt(t3[2],10)>parseInt(d.toDateString().split(" ")[2],10)-7){
		//alert(t3[2]);
			if(parseInt(lastone,10) != parseInt(t3[2],10)-1){
				for(z=parseInt(lastone,10)+1;z<parseInt(t3[2],10);z++){
					steps.push(0);
					timestamps.push('');
				}
			}
			lastone = t3[2];
			steps.push(s1[i]);
			if(parseInt(s1[i],10)>maxWeight){
				maxWeight = parseInt(s1[i],10);
			}
			timestamps.push(t3[2]);
		}
	}

	
	
	alert("HELLOOOOOOOOOOOO");
	
	$.jqplot('chart2', [steps], {
		// Give the plot a title.
		title : 'Steps Per Day This Past Week',
		axesDefaults : {
			labelRenderer : $.jqplot.CanvasAxisLabelRenderer
		},
		// An axes object holds options for all axes.
		// Allowable axes are xaxis, x2axis, yaxis, y2axis, y3axis, ...
		// Up to 9 y axes are supported.
		axes : {
			// options for each axis are specified in seperate option objects.
			
			xaxis : {
				show: false,
				tickOptions: {
					showGridline: false,
					showMark: false,
					showLabel: false
				}
			},
			yaxis : {
				tickOptions: {
					angle:270,
					formatString: '%d'
				},
				min: 0,
				max: maxWeight+2
			}
		},
		series : [{
			pointLabels: {
				show: true
			},
			trendline: {
				show: true,
//				renderer: $.jqplot.LineRenderer(),
				color: '#7FFF00',
				lable: '',
				type: 'exp',
				lineWidth: 1.5
			},
			markerOptions : {
				style : "circle",
				size : 20
			}

		}]
		
	});

};
