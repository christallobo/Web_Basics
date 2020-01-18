import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'factorial';
  num:number;
  fact:number;
  i:number;
  factorial(){
    this.num=document.getElementById("factNumber").value;
    this.fact=1;
    for(this.i=1;this.i<=this.num;this.i++){
      this.fact=this.fact*this.i;
    }
    document.getElementById("result").innerHTML="Factorial is:"+this.fact;
  }
}
