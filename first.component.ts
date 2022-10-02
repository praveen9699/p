import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  x:number=0;
  result:string='';
  // test perpose
  // people:any[]=[
  //   {
  //   "name":"akhil",
  //   "age":15
  //   },
  //   {
  //     "name":"balu",
  //     "age":12
  //   },
  //   {
  //     "name":"chaitanya",
  //     "age":22
  //   },
  //   {
//       "name":"devid",
//       "age":32
//     }
// ];
  constructor() { }

  ngOnInit(): void {
  }
  squre(){
    this.result=(this.x * this.x).toString()
    
  }
  cal(){
    
    this.result=(this.x*this.x + 2* this.x).toString()
  }
  dev(){
    this.result = '';

    for(let i=1; i<= this.x;i++){
      if(this.x%i==0){
        this.result = this.result + ',' + i;
      }
    }
  }
  

}
