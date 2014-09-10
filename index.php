<?php
	
	$dbopts = parse_url(getenv('DATABASE_URL'));

	$dbparams = array(
					'pdo.dsn' => 'pgsql:dbname='.ltrim($dbopts["path"],'/').';host='.$dbopts["host"],
					'pdo.port' => $dbopts["port"],
					'pdo.username' => $dbopts["user"],
					'pdo.password' => $dbopts["pass"]
			  	);

	//print_r($dbparams);exit;

  $response = array(
		        "status" => "success",
		        "msg" => "Hello world",
		        "envVar" => getenv('MY_VAR')
		      );
              
  
	echo json_encode($response);
 	exit;
  
?>
