interface Person{
    first_name:string;
    last_name:string;
}
function greeting(person:Person){
    return "Welcome to Typescript:"+person.first_name+" "+person.last_name;
}

//let user=true;
let user:Person={first_name:"disha",last_name:"Agrawal"};
//user.first_name="disha";
//user.last_name="Agrawal";
//document.getElementById("result").innerHTML=greeting(user);
document.getElementById("result").innerHTML=greeting(user);