import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take, map, filter  } from 'rxjs/operators';
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
    const takeFive = intervalCount
    .pipe(take(5))
    .pipe(map(x => x*10))
    .pipe(filter(x =>x >20 ));

    takeFive.subscribe(x => console.log(x));
  }

  ngOnDestroy() {

  }

}
