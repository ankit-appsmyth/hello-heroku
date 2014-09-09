<?php
  $response = array(
                "status" => "success",
                "msg" => "Hello world",
                "envVar" => getenv('MY_VAR')
              );
              
  
  echo json_encode($response);
  exit;
  
?>
