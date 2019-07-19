import { Component, AfterViewInit  } from '@angular/core';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements AfterViewInit{
  
  constructor(
    
  ) { }

  ngAfterViewInit() {
    // getElementById
    const button = document.querySelector('button');
    const clicks = fromEvent(button, 'click');
    clicks.subscribe(x => console.log(x));
  }

}
