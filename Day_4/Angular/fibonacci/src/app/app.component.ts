import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fibonacci';
  num1:number;
  num2:number;
  num:number;
  sum:number;
  i:number;
  fibonacci(){
    this.num=document.getElementById("fibSeries").value;
    this.num1=0;
    this.num2=1;
    this.sum=0;
    for(this.i=3;this.i<=this.num;this.i++){
        this.sum=this.num1+this.num2;
        this.num1=this.num2;
        this.num2=this.sum;
    }
    document.getElementById("result").innerHTML=this.sum.toString();
  }
}
