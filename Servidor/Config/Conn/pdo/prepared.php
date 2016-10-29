<?php 
/**
 * Melhor pratica usando Prepared Statements
 */

include("conf.php");

try {
	$conn = new PDO("mysql:host=$bd;dbname=$db", $user, $pass);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
	$stmt = $conn->prepare('SELECT * FROM minhaTabela WHERE id = :id');
	$stmt->execute(array('id' => $id));
	
	while($row = $stmt->fetch()) {
		print_r($row);
	}
} catch(PDOException $e) {
	echo 'ERROR: ' . $e->getMessage();
}

?>