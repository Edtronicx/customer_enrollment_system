<?php
 
$servername = "localhost";
$username = "root";
$password = "123456";
$dbname = "serverdata";
 
// Create connection
$con = mysqli_connect($servername, $username, $password, $dbname); 

$code1 = $_POST["user_id"];

if( $code1 != "" ){

    $query1 = mysqli_query($con, "DELETE FROM customerlist Where Code = '$code1';");

    $jmessage = wordwrap("Deleted data");
    echo $jmessage;

}


?>
