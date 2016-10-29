<?php 
$query = "SELECT * FROM aluno";

$result = mysql_query($query) or die('Falha na instrução SQL: ' . mysql_error());

while ($row = mysql_fetch_object($result)) {
	echo $row->Ra;
	echo $row->Senha;
	echo $row->Nome;
	echo $row->Sexo;
	echo $row->Email;
}
?>