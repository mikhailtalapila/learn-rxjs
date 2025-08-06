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
import { getSomeCoursesOverHere } from "../common/util2";
import { getSomeCourses3 } from "../common/util3";

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
    const http$ = getSomeCourses3('/api/courses');
    const courses$ = http$.pipe(
      map<any, Course[]>(course => Object.values(course['payload'])),
      shareReplay()
    );
    this.beginnerCourses$ = courses$.pipe(
      map<Course[], Course[]>(courses => courses.filter(x => x.category === 'BEGINNER'))
    )

    this.advancedCourses$ = courses$.pipe(
      map<Course[], Course[]>(courses => courses.filter(x => x.category === 'ADVANCED'))
    )
  }
}
