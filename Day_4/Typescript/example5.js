function Employee(fname,lname){
    this.first_name=fname;
    this.last_name=lname;
    }
Employee.prototype.display=function(){
    console.log("display the method of Employee");
}