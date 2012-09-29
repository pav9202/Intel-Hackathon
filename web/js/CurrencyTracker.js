var currencyOverTime = function() {
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
	var step = '10,20,35,20,50,60,150,80,80,90,120,130,120,150,250,150,580,780,0';
	var timestamp = "2012-09-21 14:04:59:612,2012-09-22 14:04:59:612,2012-09-23 14:04:59:612,2012-09-24 14:04:59:612,2012-09-25 14:04:59:612,2012-09-26 14:04:59:612,2012-09-27 14:04:59:612,2012-09-28 14:04:59:612,2012-09-29 14:04:59:612,2012-09-30 14:04:59:612,2012-10-01 14:04:59:612,2012-10-02 14:04:59:612,2012-10-03 14:04:59:612,2012-10-04 14:04:59:612,2012-10-05 14:04:59:612,2012-10-06 14:04:59:612,2012-10-07 14:04:59:612,2012-10-08 14:04:59:612";
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
		
		if(t3[2]!= lastone && parseInt(t3[0],10)==parseInt(d.getFullYear(),10)){
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

	
	var options = {
		// Give the plot a title.
		title : 'Currency Activity',
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
					showGridline: false,
					angle:270,
					formatString: '%d'
				},
				min: 0,
				max: maxWeight+2
			}
		},
		series : [{
			color:'#FF7F24',
			pointLabels: {
				show: true
			},
			trendline: {
				show: true,
//				renderer: $.jqplot.LineRenderer(),
				color: '#BF3EFF',
				lable: '',
				type: 'exp',
				lineWidth: 1.5
			},
			markerOptions : {
				style : "diamond",
				size : 20
			}

		}],
		cursor:{ 
        	show: true,
        	zoom:true, 
        	showTooltip:false
      	} 
		
	};
	
	$.jqplot('chart2', [steps], options);
	$("#chart2").bind('resize', function(event, ui) {
		plot1.replot({
			resetAxes : true
		});
	});
	


};
