import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evenodd';
  num1:number;
  result:string;
  check_number():void{
    this.num1=parseInt((document.getElementById("txtNumber") as HTMLInputElement).value);
    console.log("num1: "+this.num1);
    if(this.num1%2==0){
      this.result="Number= "+this.num1+" is even";
    }
    else{
      this.result="Number= "+this.num1+" is odd";
    }
  }
}
