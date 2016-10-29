<?php
include("init.php");

  # Conexão
mysql_connect($bd, $user, $pass) or die('Não foi possível conectar ao banco de dados: ' . mysql_error());
  # Escolhendo o banco de dados
mysql_select_db($db) or die('Não foi possível selecionar o banco de dados');
?>