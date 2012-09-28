<!-- --------------------------------------------------------
machineStatus.php
ORNL Scientific Data Group (SDG) in Computer Science and Mathematics Division (CSMD)
July 11, 2012
Banlim Loi

Description: 
Goes through a database and creates a table that lists the status of each machine

Update:
July 25, 2012
Commented out some of the sections because this code is being incorporated in indexTemp.php now
---------------------------------------------------------- -->
<!--Commented out on July 25, 2012
<html>
	<body>
		<table border ="10" bordercolorlight = "red" bordercolordark = "blue">
-->
<?
// Connect to DB 	
mysql_connect('localhost', 'root', '') or die("Unable to connect to database");
mysql_select_db('esimmon') or die("Unable to select database");


$sqlquery = "SELECT * FROM machineStatus";	// where name = 'sith'";
//printf("my query: $sqlquery");
$result = mysql_query($sqlquery);
$number = mysql_num_rows($result);

/*Commented out July 25, 2012
 * if ($number > 0){ 
	$status = mysql_result($result, 0, "status");
	$name = mysql_result($result, 0, "name");
	print"<tr><td>$name</td><td>$status</td></tr>";
	
}
else{
	echo "<br>Found no results<br>";
}*/

/*if ($number > 0){ 
	//Make sure to have the correct inequality condition. For loop won't execute unless it satisfies the correct condition to begin with
	for ($i = 0; $i < $number; $i++){ 
		$name = mysql_result($result, $i, "name");
		$status = mysql_result($result, $i, "status");	
		if ($status == "UP"){
			print"<tr height='50px'><td>$name</td><td><img src='images/machineup.gif'/></td></tr>";
			//print"<tr height='50px'><td>$name</td><td>$status</td></tr>";
			
		}
		else{
			//echo '<img src="',$imageDir, '/', $file,'" alt="', $file,'" />';
			print"<tr height='50px'><td>$name</td><td><img src='images/machinedown.gif'/></td></tr>";
		}
	}	
}
else{
	echo "<br>Found no results<br>";
}*/
?>
<!--
		</table>
	</body>	 
</html>
-->
