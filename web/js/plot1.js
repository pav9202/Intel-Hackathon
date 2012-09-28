
var WeightLoss= function(){
  var plot2 = $.jqplot ('chart2', [[3,7,9,1,4,6,8,2,5]], {
      // Give the plot a title.
      title: 'Plot With Options',
      axesDefaults: {
        labelRenderer: $.jqplot.CanvasAxisLabelRenderer
      },
      // An axes object holds options for all axes.
      // Allowable axes are xaxis, x2axis, yaxis, y2axis, y3axis, ...
      // Up to 9 y axes are supported.
      axes: {
        // options for each axis are specified in seperate option objects.
        xaxis: {
          label: "X Axis",
          pad: 1
	  
        },
        yaxis: {
          label: "Y Axis"
        }
      }
    });
};