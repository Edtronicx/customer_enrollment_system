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
$pass_dup = 0;


if( ( $fname1  != "" ) && ( $lname1 != "" ) &&  ( $code1 != "")){

    $query = mysqli_query($con, "SELECT Code FROM customerlist"); 

	while($row = mysqli_fetch_array($query)){
        $chkdup = $row["Code"];
        if ( $chkdup == $code1 ){
            $pass_dup = 1;
        }
    } 

    if ( $pass_dup == 0){
        $query1 = mysqli_query($con, "INSERT INTO Serverdata.customerlist ( Code, Firstname, Lastname ) VALUES 
        ('$code1','$fname1', '$lname1');");
        $jmessage = wordwrap("Added data");
        echo $jmessage;
    } else {
        $jmessage = wordwrap("Dupplicate data");
        echo $jmessage;
    }
}else{
    $jmessage = wordwrap("Please fill the data");
    echo $jmessage;
}


?>
