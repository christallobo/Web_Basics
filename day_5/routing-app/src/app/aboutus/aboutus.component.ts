import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  // flag:boolean=true;
  // toggle():void{
  //     if(this.flag){
  //       this.flag=false;
  //     }
  //     else{
  //       this.flag=true;
  //     }
  // }
  names:any=new Array();
  constructor() { }

  ngOnInit() {
    this.names[0]="disha";
    this.names[1]="christal";
    this.names[2]="pooja";
    this.names[3]="ankita";
  }

}
