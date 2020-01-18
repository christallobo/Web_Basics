 function populateCity(){
    var xhr=new XMLHttpRequest();
    xhr.open('GET',"state-city.json",true);
    xhr.responseText="text";
    xhr.send();

    xhr.onload=function(){
        if(xhr.status==200){
            var data=JSON.parse(xhr.responseText);
            //console.log(data);
            var state=document.getElementById("state").value;
            console.log(data.Karnataka);
            var cityHtml="";
            if(state=="Karnataka"){
                for(var i=0;i<data.Karnataka.length;i++){
                    cityHtml=cityHtml+"<option>"+data.Karnataka[i]+"</option>"
                }
            }
            else if(state=="Maharashtra"){
                for(var i=0;i<data.Maharashtra.length;i++){
                    cityHtml=cityHtml+"<option>"+data.Maharashtra[i]+"</option>"
                }
            }
            else if(state=="Tamil_Nadu"){
                for(var i=0;i<data.Tamil_Nadu.length;i++){
                    cityHtml=cityHtml+"<option>"+data.Tamil_Nadu[i]+"</option>"
                }
            }
            else if(state=="Telangana"){
                for(var i=0;i<data.Telangana.length;i++){
                    cityHtml=cityHtml+"<option>"+data.Telangana[i]+"</option>"
                }
            }
            else if(state=="Odisha"){
                for(var i=0;i<data.Odisha.length;i++){
                    cityHtml=cityHtml+"<option>"+data.Odisha[i]+"</option>"
                }
            }
            else if(state=="Andhra Pradesh"){
                for(var i=0;i<data["Andhra Pradesh"].length;i++){
                    cityHtml=cityHtml+"<option>"+data["Andhra Pradesh"][i]+"</option>"
                }
            }
            else if(state=="West_Bengal"){
                for(var i=0;i<data.West_Bengal.length;i++){
                    cityHtml=cityHtml+"<option>"+data.West_Bengal[i]+"</option>"
                }
            }
            document.getElementById("city").innerHTML=cityHtml;
        }
    }
 }