<?php 


$servername = "localhost";
$username = "root";
$password = "123456";
$dbname = "serverdata";

// Get the user id 
$user_id = $_REQUEST['user_id']; 

// Database connection 
$con = mysqli_connect($servername, $username, $password, $dbname); 

if ($user_id !== "") { 
	
	// Get corresponding first name and 
	// last name for that user id	 
	$query = mysqli_query($con, "SELECT Firstname, 
	Lastname FROM customerlist WHERE Code='$user_id'"); 

	$row = mysqli_fetch_array($query); 


	if (mysqli_num_rows($query) != 0)
	{
		//results found
		// Get the first name 
		$first_name = $row["Firstname"]; 

		// Get the first name 
		$last_name = $row["Lastname"]; 

	} else {
		// results not found
			// Get the first name 
		$first_name = "empty"; 

		// Get the first name 
		$last_name = "empty"; 
	}


} 

// Store it in a array 
$result = array("$first_name", "$last_name"); 

// Send in JSON encoded form 
$myJSON = json_encode($result); 

echo $myJSON; 



?> 
