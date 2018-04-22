import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input()
  public startCaption;

  @Input()
  public stopCaption;

  @Output()
  public clockClick = new EventEmitter();

  private start = false;
  private caption = this.stopCaption;

  private onClick(): void {
    const self = this;
    self.clockClick.emit({start: self.start});

    self.start = !self.start;
    self.caption = self.start ? self.startCaption : self.stopCaption;
  }

  ngOnInit(): void {
    this.caption = this.stopCaption;
  }
}
