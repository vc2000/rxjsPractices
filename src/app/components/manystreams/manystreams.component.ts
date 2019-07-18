import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { mergeMap, take,map } from 'rxjs/operators';

@Component({
  selector: 'app-manystreams',
  templateUrl: './manystreams.component.html',
  styleUrls: ['./manystreams.component.scss']
})
export class ManystreamsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const letters = of('a', 'b', 'c');
    const result = letters.pipe(
      mergeMap(x => interval(1000)
      .pipe(take(5))
      .pipe(map(i => i + x))),
    );
    result.subscribe(x => console.log(x));


  }

}
