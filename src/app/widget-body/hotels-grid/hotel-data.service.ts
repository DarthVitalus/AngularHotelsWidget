import {Injectable, OnInit} from '@angular/core';
import { _HOTELS, _HOTELS2 } from './hotelsData';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class HotelDataService implements OnInit {

  private _hotels: Hotel[];
  private _hotels2: Observable<Hotel[]>;

  private hotelChangeSource = new Subject<Hotel>();
  public selectedHotel$ = this.hotelChangeSource.asObservable();

  constructor() {
    this._hotels = _HOTELS;
    this._hotels2 = _HOTELS2;
  }

  ngOnInit(): void {
    this._hotels = _HOTELS;
    this._hotels2 = _HOTELS2;
  }

  public getHotels(): Hotel[] {
    return this._hotels;
  }

  public getHotelTypes(): string[] {
    const _hotels = this.getHotels();
    const _hotelTypes = _hotels.map((hotel: Hotel) => {
      return hotel.type;
    })
    return _hotelTypes.filter((type: string, index: number, hotelTypes: string[]) => {
      return hotelTypes.indexOf(type) === index;
    });
  }

  public getHotels2(): Observable<Hotel[]> {
    return this._hotels2;
  }

  OnHotelSelected(hotel: Hotel) {
    this.hotelChangeSource.next(hotel);
  }
}
