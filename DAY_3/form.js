function validateForm(){
    var errorStr="<ul>";
    var flag=false;
    var empname=document.getElementById("empname").value;
    var empcode=document.getElementById("empcode").value;
    if(empname==""){
        errorStr+="<li>Employee name is required</li>";
        flag=true;
    }
    if(empcode==""){
        errorStr+="<li>Employee code is required</li>";
        flag=true;
    }
    var dept=document.getElementsByName("department");
    var deptStatus=false;
    for( var i=0;i<dept.length;i++){
        if(dept[i].checked){
            deptStatus=true;
        }
    }
    if(!deptStatus){
        errorStr+="<li>Please select Depatrment</li>";
        flag=true;
    }

    var day=document.getElementById("day");
    var daySelected=day.options[day.selectedIndex].value;
    if(daySelected==-1){
        errorStr+="<li>Please select day</li>";
        flag=true;
    }

    var month=document.getElementById("month");
    var monthSelected=month.options[month.selectedIndex].value;
    if(monthSelected==-1){
        errorStr+="<li>Please select month</li>";
        flag=true;
    }

    var year=document.getElementById("year");
    var yearSelected=year.options[year.selectedIndex].value;
    if(yearSelected==-1){
        errorStr+="<li>Please select year</li>";
        flag=true;
    }

    var address=document.getElementById("address").value;
    if(address==""){
        errorStr+="<li>Please enter the address</li>";
        flag=true;
    }

    

    errorStr=errorStr+"</ul>";
    if(flag){
        document.getElementById("error").innerHTML=errorStr;
    }
    else{
        document.getElementById("form").submit();
    }
  
}