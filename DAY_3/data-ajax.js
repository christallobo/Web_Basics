var xhr=new XMLHttpRequest();
xhr.open('GET','data1.json',true);
xhr.responseType='text';
xhr.send();

xhr.onload=function(){
    if(xhr.status==200){
        var data=xhr.responseText;
        document.getElementById("result").innerHTML=data;
    }
    else{
        document.getElementById("result").innerHTML="File not found";
    }
}