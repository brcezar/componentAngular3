import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
})
export class CountdownComponent implements OnInit {
  @Input()
  startValue: number = 10;

  count: number;

  intervalId: number;

  constructor() {}

  ngOnInit() {
    this.reset();
  }

  start() {
    this.intervalId = setInterval(() => {
      if (this.count > 0) {
        this.count--;
      }
    }, 1000);
  }

  pause() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.count = this.startValue;
  }
}
