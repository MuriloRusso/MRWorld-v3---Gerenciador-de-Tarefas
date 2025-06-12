<?php 
	error_reporting(0);
	$usuario = 'root';
	$senha = '';
	$database = 'mrworld';
	$host = 'localhost';
	$mysqli = new mysqli($host, $usuario, $senha, $database);
	$mysqli->set_charset("utf8");
	if($mysqli->error):
		die('Falha ao conectar ao banco de dados');
	endif;