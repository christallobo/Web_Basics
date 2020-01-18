interface Person {
    first_name: string;
    last_name: string;
}
class Student implements Person {
    first_name: string;
    last_name: string;
    constructor(fname: string, lname: string) {
        this.first_name = fname;
        this.last_name = lname;
    }
     greeting():string{
        return "Welcome to Typescript:" +this.first_name + " " + this.last_name;
    }   
}
let student1=new Student("Disha","Agrawal");
document.getElementById("result").innerHTML=student1.greeting();

