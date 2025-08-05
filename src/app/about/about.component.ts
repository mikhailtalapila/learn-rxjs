import { Component, inject, OnInit, ViewEncapsulation } from "@angular/core";
import { response } from "express";
import { fromEvent, interval, noop, Observable, timer } from "rxjs";
import { map, take } from "rxjs/operators";
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
    
  }
}
