function validate(){
    //alert("validate function is called.");
    var user=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    if(user!=""&& pass!=""){
        //alert("submit the form");
        document.getElementById("frm").submit();
    }
    else{
        alert("username and password are required values.Please enter them");
    }
}