
function GetDetail(str) {     
    if (str.length == 0) { 
        document.getElementById("first_name").value = ""; 
        document.getElementById("last_name").value = ""; 
        return; 
    } else { 
        // Creates a new XMLHttpRequest object 
        var xmlhttp = new XMLHttpRequest(); 
        xmlhttp.onreadystatechange = function () { 
            // Defines a function to be called when 
            // the readyState property changes 
            if (  this.readyState == 4 &&
                     this.status == 200) { 
                    // Typical action to be performed 
                    // when the document is ready 
                    var myObj = JSON.parse(this.responseText); 

                    // Returns the response data as a 
                    // string and store this array in 
                    if ( (myObj[1] != 'empty') && (myObj[0] != 'empty') ){
                    // a variable assign the value  
                    // received to first name input field 
                        document.getElementById 
                            ("first_name").value = myObj[0]; 
                    // Assign the value received to 
                    // last name input field 
                        document.getElementById
                            ("last_name").value = myObj[1];
                        show_msg("remove_all");   
                   }else {  //If recieved empty data
                        alert("No Data");
                        document.getElementById 
                            ("first_name").value = ""; 
                        document.getElementById
                            ("last_name").value = "";
                        show_msg("search_sw");
                    }  
                } 
            }; 
            // xhttp.open("GET", "filename", true); 
            xmlhttp.open("GET", "get_data.php?user_id=" + str, true); 
              
            // Sends the request to the server 
            xmlhttp.send(); 
        } 
    } 
function clearing (){
    document.getElementById("first_name").value = ""; 
    document.getElementById("last_name").value = ""; 
    document.getElementById("user_id").value = ""; ;
    show_msg("remove_all");
}

function add ( strfname, strlname, strcode){
    // Creates a new XMLHttpRequest object 
    var xmlhttp = new XMLHttpRequest(); 
            
    xmlhttp.onreadystatechange = function () { 

    // Defines a function to be called when 
    // the readyState property changes 
    if (this.readyState == 4 &&  
        this.status == 200) { 
                      
        // Typical action to be performed 
        // when the document is ready 
        //document.getElementById("alertmessage").innerHTML = this.responseText;
        alert(this.responseText);
        show_msg("submit_sw");
        } 
    }; 

    // xhttp.open("POST", "filename", true); 
    xmlhttp.open("POST", "insert_data.php", true); 

    //This is needed for POST
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
       
    // Sends the request to the server 
    xmlhttp.send("last_name="+strlname+"&first_name="+strfname+"&user_id="+strcode); 
}

function remove(str){
    // Creates a new XMLHttpRequest object 
    var xmlhttp = new XMLHttpRequest(); 
            
    xmlhttp.onreadystatechange = function () { 

    // Defines a function to be called when 
    // the readyState property changes 
    if (this.readyState == 4 &&  
        this.status == 200) { 
                      
        // Typical action to be performed 
        // when the document is ready 
        //  document.getElementById("alertmessage").innerHTML = this.responseText;
        document.getElementById 
            ("first_name").value = ""; 
        document.getElementById
            ("last_name").value = "";
        alert(this.responseText);           
        show_msg("delete_sw");
        } 
    }; 

    // xhttp.open("POST", "filename", true); 
    xmlhttp.open("POST", "delete_data.php", true); 

    //This is needed for POST
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

              
    // Sends the request to the server 
     xmlhttp.send("user_id="+str);     
}
    
function updating ( strfname, strlname, strcode){
    // Creates a new XMLHttpRequest object 
    var xmlhttp = new XMLHttpRequest(); 
            
    xmlhttp.onreadystatechange = function () { 
        
    // Defines a function to be called when 
    // the readyState property changes 
    if (this.readyState == 4 &&  
        this.status == 200) { 
                              
        // Typical action to be performed 
        // when the document is ready 
        //   document.getElementById("alertmessage").innerHTML = this.responseText;
        alert(this.responseText);
        show_msg("update_sw");   
        } 
    };    
    // xhttp.open("POST", "filename", true); 
    xmlhttp.open("POST", "update_data.php", true); 
        
    //This is needed for POST
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        
                      
    // Sends the request to the server 
    xmlhttp.send("last_name="+strlname+"&first_name="+strfname+"&user_id="+strcode); 
}

function show_msg(str){
    switch(str){
        case "update_sw":
            update_class.style.display = 'block';
            search_class.style.display = 'none';
            delete_class.style.display = 'none';
            submit_class.style.display = 'none';
            break;
        case "submit_sw":
            update_class.style.display = 'none';
            search_class.style.display = 'none';
            delete_class.style.display = 'none';
            submit_class.style.display = 'block';
            break;
        case "delete_sw":
            update_class.style.display = 'none';
            search_class.style.display = 'none';
            delete_class.style.display = 'block';
            submit_class.style.display = 'none';
            break;
        case "search_sw":
            update_class.style.display = 'none';
            search_class.style.display = 'block';
            delete_class.style.display = 'none';
            submit_class.style.display = 'none';
            break;
        default :
            update_class.style.display = 'none';
            search_class.style.display = 'none';
            delete_class.style.display = 'none';
            submit_class.style.display = 'none';
    }
}
