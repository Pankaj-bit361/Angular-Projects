import { Component } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {
 Counter:number=0

 increase(){
  this.Counter++
 }
decrease(){
  if(this.Counter>=1){

    this.Counter--
  }
}
}
