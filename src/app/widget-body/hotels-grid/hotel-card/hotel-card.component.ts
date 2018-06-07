import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {

  @Input()
  selectedId: number;

  @Input()
  hotel: Hotel;

  @Output()
  public cardClick = new EventEmitter();

  onCardClick() {
      const self = this;
      self.cardClick.emit(this.hotel);
  }

  ngOnInit(): void {
  }
}
