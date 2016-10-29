<?php
include("server.php");

try {
	$conn = new PDO('mysql:host=localhost;dbname='.$db, $user, $pass);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
	echo 'ERROR: ' . $e->getMessage();
}
?>