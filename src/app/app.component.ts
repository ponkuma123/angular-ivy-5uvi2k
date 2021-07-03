import { AnimationStyleMetadata } from '@angular/animations';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  result:number=0;
  element:number;
  element1:number
  click(event)
  {
    this.element=parseInt(event.target.value)
    console.log(this.element)
    this.result=this.element+this.element1;
  }
  click1(event)
  {
    this.element1=parseInt(event.target.value)
    this.result=this.element+this.element1

  }
  

}
