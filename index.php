<?php
	
	$dbopts = parse_url(getenv('DATABASE_URL'));

	/*$dbparams = array(
					'pdo.dsn' => 'pgsql:dbname='.ltrim($dbopts["path"],'/').';host='.$dbopts["host"],
					'pdo.port' => $dbopts["port"],
					'pdo.username' => $dbopts["user"],
					'pdo.password' => $dbopts["pass"]
			  	);*/

	//print_r($dbparams);exit;
	
	$con = pg_connect("host=".$dbopts["host"]." dbname=".$dbopts["port"]." user=".$dbopts["user"]." password=".$dbopts["pass"])
    or die ("Could not connect to server\n");
    
    $query = "SELECT msg FROM messages WHERE id= 1"; 
    
    $rs = pg_query($con, $query) or die("Cannot execute query: $query\n");
    
    $messages = pg_fetch_assoc($rs)

	$response = array(
					"status" => "success",
					"msg" => $messages[0]['msg'],
					"envVar" => getenv('MY_VAR')
				);
              
  
	echo json_encode($response);
 	exit;
  
?>
