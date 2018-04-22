import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private timer;
  private curTime = new Date();

  ngOnInit(): void {
    const self = this;
    self.startClock();
  }

  private onClockClick(event): void {
    const self = this;
    if (event.start) {
      self.startClock();
    } else {
      self.stopClock();
    }
  }

  private startClock(): void {
    const self = this;
    self.timer = setInterval(() => {
      self.curTime = new Date();
    }, 500);
  }

  private stopClock(): void {
    const self = this;
    clearInterval(self.timer);
  }
}

//TODO перерисовка грида при тике часов?? почему происходит? видно в консоли
