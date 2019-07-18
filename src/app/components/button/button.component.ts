import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const clicks = fromEvent(document, 'click');
    clicks.subscribe(x => console.log(x));
  }

}
