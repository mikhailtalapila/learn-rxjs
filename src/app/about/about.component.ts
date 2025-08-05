import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { response } from 'express';
import { fromEvent, interval, noop, Observable, timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: false
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const http$ = new Observable(observer => {
      fetch('/api/courses')
      .then(
        response => {
          return response.json();
        }
      )
      .then(body => {
        observer.next(body);
        observer.complete();
      })
      .catch(err => {
        observer.error(err)
      })
    })

    http$.subscribe(val => {
      console.log(`values: `, val);

    })

    const interval$ = interval(3000)
    const someNumber = interval$.pipe(take(4));
    someNumber.subscribe(x => console.log(x));

  }

}
