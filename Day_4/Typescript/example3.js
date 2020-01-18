function greeting(person) {
    return "Welcome to Typescript:" + person.first_name + " " + person.last_name;
}
//let user=true;
var user = { first_name: "disha", last_name: "Agrawal" };
//user.first_name="disha";
//user.last_name="Agrawal";
//document.getElementById("result").innerHTML=greeting(user);
document.getElementById("result").innerHTML = greeting(user);
