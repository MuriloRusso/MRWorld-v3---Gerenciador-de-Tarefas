<?php
	/*$headers = apache_request_headers();	

	if(!isset($headers['Authorization'])){
		die("Você não está logado");
	}
	
	$token = (int)preg_replace('/^Bearer\s+/i', '',$headers['Authorization']);

	$sql_code = "SELECT * FROM tokens WHERE id = $token AND expires_at > NOW()";
	$sql_query = $mysqli->query($sql_code) or die("Falha na execução do código SQL" . $mysqli->error);

    if ($sql_query->num_rows === 0) {
		die("Você não está logado");	
	}*/
