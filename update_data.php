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

    $query1 = mysqli_query($con, "UPDATE customerlist SET Firstname = '$fname1', Lastname = '$lname1' Where Code = '$code1';");


    $jmessage = wordwrap("Updated data");
    echo $jmessage;

}
?>
