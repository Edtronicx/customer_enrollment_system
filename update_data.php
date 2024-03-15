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
            $pass_dup = 1; //user_id is existed
        }
    } 

    if ( $pass_dup == 1){
    $query1 = mysqli_query($con, "UPDATE customerlist SET Firstname = '$fname1', Lastname = '$lname1' Where Code = '$code1';");
    $jmessage = wordwrap("Updated data");
    echo $jmessage;
    } else {
    $jmessage = wordwrap("No record");
    echo $jmessage;
    }

} else {
    $jmessage = wordwrap("Please fill the data");
    echo $jmessage;
}
?>
