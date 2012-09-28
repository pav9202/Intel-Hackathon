<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>eSiMon Gateway</title>
		<!--<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="author" content="Michel Hiemstra (mhiemstra@php.net)" />
		<meta name="keywords" content="drag&drop portal, igoogle drag and drop, igoogle, drag and drop div igoogle javascript, drag and drop block like igoogle, div drag drop" />
		<meta name="description" content="iGoogle like Drag & Drop Portal v2.0 by Michel Hiemstra" /> 
		-->
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/prototype/1.6.1/prototype.js"></script>
		<script type="text/javascript" src="assetsTemp/js/scriptaculous.js"></script>
		<script type="text/javascript" src="assetsTemp/js/portal.js"></script>
		<?	require_once 'get_blocksTemp.php';
			include 'machineStatus.php';
		?>
		
		
		<script type="text/javascript">
			var settings 	= {<?=getBlocks()?>};
			
			var options 	= { portal 			: 'columns', 
								editorEnabled 	: true, 
								saveurl 		: 'saveTemp.php' };
			var data 		= {};
						
			var portal;
					
			Event.observe(window, 'load', function() {
				portal = new Portal(settings, options, data);
			});
		</script>
		
		<link rel="stylesheet" href="assetsTemp/css/styleTemp.css"  type="text/css" media="screen" />
		<link rel="stylesheet" href="assetsTemp/css/portalTemp.css"  type="text/css" media="screen" />
	</head>
	<body>
	<!--
		<div id="headnote">
			<h1>eSiMon Gateway</h1>
		</div>
		<div style="clear:both;"></div>
		<hr />
	-->	
		<div id="wrapper">
		<!--<div id="heading"></div> -->
			
		<div id="headnote">
					<h1>eSiMon Gateway</h1>
					<h2>SiMon</h2>
			</div>
			
			<div style="clear:both;"></div>

			<hr />
		
			<div id="columns">			
				<div id="column-1" class="column menu"></div>
				
				<div id="column-2" class="column blocks"></div>
				
				<div id="column-3" class="column sidebar"></div>
				
				<div class="portal-column" id="portal-column-block-list" style="display: none;">             		
					<div class="block" id="block-1">
						<h1 class="draghandle">Video</h1>
						<!--<div class="scrollWin">-->
							<video src="videos/wushu.ogv" controls="controls" type="video/ogg" class="displayVid"/>
								<p>Your browser does not support the video tag.</p>	
							</video>	
						<!--</div>-->
					</div>
					
					<div class="block" id="block-2">
						<h1 class="draghandle">Image</h1>
							<img src="images/potential_favg.0090-1.jpg" class="displayImg"/>
					</div>
					
					<div class="block" id="block-3">
						<h1 class="draghandle">Google Docs</h1>
							<iframe height="500" width="100%" scrolling="no" src="https://docs.google.com/document/d/1nyctikKcngok-hvz0K7LBxaAahS4oJnFQMH85ciha9U/edit"></iframe>
					</div>
					
					<div class="block" id="block-4">
						<h1 class="draghandle">Google Docs Gadget</h1>
						<form method="post" action="shareInfo.php">
							username: <input type="text" id="uname" name="uname"/>
							date: <input type="text" id="date" name="date"/>
							glink: <input type="text" id="glink" name="glink"/>
							run: <input type="text" id="run" name="run"/>
							code: <input type="text" id="code" name="code"/>
							share with: <input type="text" id="share" name="shareWith"/>
							<input type="submit"/>
						</form>		
							
						<!--
							<input type="submit" onClick="(alert('submit form with: username='+document.getElementById('uname').value+'\ntest='+document.getElementById('date').value))">
							<input type="submit"  echo "onClick=\"(alert('submit form with: username='+document.getElementById('uname').value+'\\ntest='+document.getElementById('date').value))\";"/>   REMEMBER TO ADD PHP TAGS!
						-->	
						<script src="//www.gmodules.com/ig/ifr?url=http://eviloreo.com/google/myeventcalendarver2.xml&amp;up_name=Belinda&amp;up_dat0=&amp;up_dat1=&amp;up_dat2=&amp;up_dat3=&amp;up_dat4=&amp;up_dat5=&amp;up_dat6=&amp;up_dat7=&amp;up_dat8=&amp;up_dat9=&amp;up_dat10=&amp;up_dat11=&amp;up_highlight=%23FF0000&amp;up_borderStyle=solid&amp;up_borderSize=2&amp;synd=open&amp;w=320&amp;h=250&amp;title=&amp;border=%23ffffff%7C0px%2C1px+solid+%23993333%7C0px%2C1px+solid+%23bb5555%7C0px%2C1px+solid+%23DD7777%7C0px%2C2px+solid+%23EE8888&amp;output=js"></script>
					</div>
					
					<div class="block" id="block-5">
						<h1 class="draghandle">Block 5</h1>
						<div class="scrollWin">
							<table border ="10" bordercolorlight = "red" bordercolordark = "blue" align="center">
							<?	if ($number > 0){ 
									//Make sure to have the correct inequality condition. For loop won't execute unless it satisfies the correct condition to begin with
									for ($i = 0; $i < $number; $i++){ 
										$name = mysql_result($result, $i, "name");
										$status = mysql_result($result, $i, "status");	
										if ($status == "UP"){
											print"<tr height='50px'><td>$name</td><td><img src='images/machineup.gif'/></td></tr>";
										}
										else{
											print"<tr height='50px'><td>$name</td><td><img src='images/machinedown.gif'/></td></tr>";
										}
									}	
								}
								else{
									echo "<br>Found no results<br>";
								}
							
							?>
							</table>
						</div>		
					</div>
					
					<div class="block" id="block-6">
						<h1 class="draghandle">Block 6</h1>
						<p> The goal of this project is to transform eSiMon into an adaptable service delivery portal. 
						The eSiMon dashboard is currently a monolithic package that users either adopt or not. 
						It is designed to support simulation scientists, focusing primarily on fusion science. 
						There are efforts in the back to deliver services to different teams of scientists; 
						however the eSiMon appearance and structure does not reflect the modularity on the server side.<p>
					</div>		
					
				</div>
			</div>
			
			<div style="clear:both;"></div>
			
			<hr style="margin-top: 40px;" />
		
			<!--
			<div id="debug">
				
				<h1>Debug information (no actual saving will be done in the demo):</h1>
				
				<p style="margin:0px;" id="data"></p>
				
			</div>
			
			<div style="clear:both;"></div>
			
			<hr style="margin-top: 40px;" />
			
			<div id="debug">
				
				<h1>Download</h1>
				
				<p>Click <a href="http://michelhiemstra.nl/scripts/jsportal/jsportal-v2.0.tar.gz">here</a> to download the source code</p>
				
			</div>
			-->
			<div style="clear:both;"></div>	
			
			<div id="browser-support">
				Supported browsers: Just about all of them: IE6, IE7, IE8, FireFox, Safari, Chrome, Opera and more.
			</div>
			
			<div style="clear:both;"></div>	
			
			<!--
			<div id="licence">
				<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/80x15.png" /></a>
			</div>
			
			<div id="donate">
				<form action="https://www.paypal.com/cgi-bin/webscr" method="post" name="form">
					<input type="hidden" name="cmd" value="_s-xclick">
					<input type="hidden" name="hosted_button_id" value="8004562">
					My scripts are free, but feel free to buy me a beer, <a href="#" onclick="document.form.submit();">donate</a> (paypal)!
				</form>
			</div>
			-->
		</div>
		
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-8526455-1");
pageTracker._trackPageview();
} catch(err) {}</script>
		
	</body>
</html>