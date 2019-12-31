export class Employee {
    employee_id:number;
    employee_name:string;
    employee_salary:number;

    constructor(employee_id:number,employee_name:string,employee_salary:number){
        this.employee_id=employee_id;
        this.employee_name=employee_name;
        this.employee_salary=employee_salary;
    }

    toString():string{
        return "Employee Id:"+this.employee_id+"Employee name:"+this.employee_name+" Employee salary:"+this.employee_salary;
    }
}
