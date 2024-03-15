<?php
 
$servername = "localhost";
$username = "root";
$password = "123456";
$dbname = "serverdata";
 
// Create connection
$con = mysqli_connect($servername, $username, $password, $dbname); 

$lname1 = $_POST["last_name"];
$fname1 = $_POST["first_name"];
$code1 = $_POST["user_id"];

if( ( $fname1  != "" ) && ( $lname1 != "" ) &&  ( $code1 != "")){

    $query1 = mysqli_query($con, "INSERT INTO Serverdata.customerlist ( Code, Firstname, Lastname ) VALUES 
    ('$code1','$fname1', '$lname1');");

    $jmessage = wordwrap("Added data");
    echo $jmessage;

}


?>
