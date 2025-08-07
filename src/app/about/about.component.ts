import { Component, inject, OnInit, ViewEncapsulation } from "@angular/core";
import { response } from "express";
import {
  concat,
  fromEvent,
  interval,
  merge,
  noop,
  Observable,
  of,
  timer,
} from "rxjs";
import { map, take, timeout } from "rxjs/operators";
import { createHttpObservable } from "../common/util";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
  standalone: false,
})
export class AboutComponent implements OnInit {
  
  constructor() {
    
  }


  ngOnInit() {
    
  }
}
