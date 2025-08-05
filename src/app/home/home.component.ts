import { Component, OnInit } from "@angular/core";
import { Course } from "../model/course";
import { interval, noop, Observable, of, timer } from "rxjs";
import {
  catchError,
  delayWhen,
  map,
  retryWhen,
  shareReplay,
  tap,
} from "rxjs/operators";
import { createHttpObservable } from "../common/util";
import { getAlternateCourses } from "../common/helper";
import { anotherHttpHelper } from "../common/anotherHttpService";
import { yetAnotherCourseGetter } from "../common/yetAnotherHelper";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  standalone: false,
})
export class HomeComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  constructor() {}

  ngOnInit() {
    const http$ = yetAnotherCourseGetter('/api/courses');
    const courses$ = http$.pipe(
      tap(() => console.log(`just made a call to the http`)),
      map(result => Object.values(result['payload'])),
      shareReplay()
    )

    this.beginnerCourses$ = courses$.pipe(
      map<any, Course[]>(courses => courses.filter(c => c.category === 'BEGINNER'))
    );
    this.advancedCourses$ = courses$.pipe(
      map<any, Course[]>(courses => courses.filter(c => c.category === 'ADVANCED'))
    );    
  }
}
