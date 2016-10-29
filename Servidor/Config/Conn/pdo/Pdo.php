<?php 
/**
* Class from Connection as PDO
*/
class Pdo //extends Pdo
{
	
	function __construct(argument)
	{
		# code...
	}

	try {
		$conn = new PDO('mysql:host=localhost;dbname='.$db, $user, $pass);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	} catch (PDOException $e) {
		echo 'ERROR: ' . $e->getMessage();
	}
}
?>