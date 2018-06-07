import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HotelDataService} from './hotel-data.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/count';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hotels-grid',
  templateUrl: './hotels-grid.component.html',
  styleUrls: ['./hotels-grid.component.css']
})
export class HotelsGridComponent implements OnInit {
  private hotels: Hotel[] = [];
  //hotels2: Observable<Hotel[]>;
  private _selectedItem: Hotel;

  get selectedItem() {
    return this._selectedItem;
  }
  set selectedItem(hotel: Hotel) {
    this._selectedItem = hotel;
    this._hotelDataService.OnHotelSelected(hotel);
  }

  private selectedHotelType: string;

  constructor(
    private _hotelDataService: HotelDataService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.hotels = this._hotelDataService.getHotels();
    //this.hotels2 = this._hotelDataService.getHotels2();
    const selectedTypeFromRoute = this._activatedRoute.data.subscribe((data) => {
      const typeFromUrl = data.type;
      this.selectedHotelType = typeFromUrl === 'default' ? this.hotels[0].type : typeFromUrl;
      this.selectedItem = this.hotels.filter((hotel: Hotel) => {
        return hotel.type === this.selectedHotelType;
      })[0];
    });
  }

  onFilterClick(hotelType: string): void {
    this.selectedHotelType = hotelType;
    // this.selectedItem = this.hotels.filter((hotel) => {
    //   return hotel.type === this.selectedHotelType;
    // })[0];
  }

  onCardClick(hotel: Hotel): void {
    this.selectedItem = hotel;
  }
}

