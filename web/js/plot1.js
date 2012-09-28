var WeightLoss = function() {
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
	alert("HELLOOOOOOOOOOOO");
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

};
