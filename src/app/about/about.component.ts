import { Component, inject, OnInit, ViewEncapsulation } from "@angular/core";
import { response } from "express";
import { concat, fromEvent, interval, noop, Observable, of, timer } from "rxjs";
import { map, take, timeout } from "rxjs/operators";
import { createHttpObservable } from "../common/util";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
  standalone: false,
})
export class AboutComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    const source1$ = of(1,2,3);
    const middleSource$ = interval(1500);
    const source2$ = of(5,6,7);

    const result$ = concat(source1$, middleSource$,  source2$);

    result$.subscribe(val => console.log(val));
  }
}
