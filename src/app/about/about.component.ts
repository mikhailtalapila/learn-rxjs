import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fromEvent, interval, timer } from 'rxjs';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: false
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      const interval$ = timer(3000, 1000);

      const sub = interval$.subscribe(val => {
        console.log(`stream => `, val);
      })

      setTimeout(() => {
        sub.unsubscribe();
        console.log(`unsubscribed`)
      }, 5000)
      
      const click$ = fromEvent(document, 'click');
      click$.subscribe(
        evt => console.log(evt),
        err => console.log(err),
        () => console.log(`completed`)
                
      
      );
      

  }

}
