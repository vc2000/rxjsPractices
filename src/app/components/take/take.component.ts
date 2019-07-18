import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take, map } from 'rxjs/operators';
// import 'rxjs/add/operator/';


@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const intervalCount = interval(1000);
    const takeFive = intervalCount.pipe(take(5));

    takeFive.pipe(map(x => x*10)).subscribe(x => console.log(x));
  }

  ngOnDestroy() {

  }

}
