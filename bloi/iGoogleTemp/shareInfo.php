<?
// Connect to DB 	
/*require_once 'config.php';*/

// Connect to DB 	
mysql_connect('localhost', 'root', '') or die("Unable to connect to database");
mysql_select_db('esimmon') or die("Unable to select database");

// Function to sanitize values received from the form. Prevents SQL injection
function clean($str) {
	$str = @trim($str);
	if(get_magic_quotes_gpc()) {
		$str = stripslashes($str);
	}
	return mysql_real_escape_string($str);
}

// Sanitize the required POST values
$username = clean($_POST['uname']);
$date = clean($_POST['date']);
$glink = clean($_POST['glink']);
$run = clean($_POST['run']);
$code = clean($_POST['code']);
$viewers = clean($_POST['shareWith']);

//Create INSERT query
$qry = "INSERT INTO shareInfo (username, date, glink, run, code, viewers) VALUES('$username', '$date', '$glink', '$run', '$code', '$viewers')";
/*$qry = "INSERT INTO shareInfo (username, date, glink, run, code, viewers) VALUES('b', 'b', 'b', 'b', 'b', 'a')";*/
/*echo "query: $qry";*/
$result = @mysql_query($qry);
return;
?>