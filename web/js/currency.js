	$(function(){
		
		// should be ajax the number of coins
		
		// dynamically add the canvas under the currency tile
		var p_node = "<p id=\"currency_text\" style=\"display:none;\"></p>";
		var canvas_node = "<canvas id=\"currency_canvas\" height=\"251\"></canvas>";
		$('#currency_tile').append(p_node).append(canvas_node);
		
		var coins = Math.floor(Math.random()*1000)+1;
		console.log(coins);
		
		$('#currency_text').append("You have <span style=\"font-size: 40px\">"+coins+"</span> coins now.").show('slow',function(){
			// animation complete
			
			var offset_h = $('#currency_text').position().top+$('#currency_text').outerHeight();
			var ctx = document.getElementById("currency_canvas").getContext("2d");
			var image = new Image;
			image.src = "img/coins-icon.png";
			image.onload = function() { 
				for (var i=0; i<coins/10; i++) {
					setTimeout(function(){
						var top_i = Math.floor(Math.random()*200)+1;
						var left_i = Math.floor(Math.random()*200)+1;
						//console.log(top_i+" "+left_i);
						ctx.drawImage(image,top_i,left_i,100,37);
					},i*50);
				}}
		});
		
	});