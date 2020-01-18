import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-app2';
  num1:number;
  result:string;
  check_number():void{
    alert("function called");
    //this.num1=document.getElementById("txtNumber").value;
    //this.num1=parseInt((document.getElementById("txtNumber") as HTMLInputElement).value);

    console.log("num1: "+this.num1);
    if(this.num1>0){
      //document.getElementById("result").innerHTML="Number is positive";
      this.result="Number="+this.num1+"is positive";
    }
    else{
      //document.getElementById("result").innerHTML="Number is negative";
      this.result="Number="+this.num1+"is negative";
    }
  }
}
