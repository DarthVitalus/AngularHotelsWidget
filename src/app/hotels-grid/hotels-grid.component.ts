import { Component, OnInit } from '@angular/core';
import {HotelDataService} from './hotel-data.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-hotels-grid',
  templateUrl: './hotels-grid.component.html',
  styleUrls: ['./hotels-grid.component.css']
})
export class HotelsGridComponent implements OnInit {
  hotels: Hotel[];

  constructor(
    private _hotelDataService: HotelDataService
  ) {}

  ngOnInit() {
    this.hotels = this._hotelDataService.getHotels();
  }

}

//TODO почему в консоли ошибка? почему hotels = undefined?
