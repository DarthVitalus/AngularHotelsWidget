import {Component, OnDestroy} from '@angular/core';
import {HotelDataService} from '../hotels-grid/hotel-data.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnDestroy {

  public weatherInfo: WeatherInfo;
  subscription: any;

  constructor(
    private _hotelDataService: HotelDataService
  ) {
    this.subscription = this._hotelDataService.selectedHotel$.subscribe(
      selectedHotel => {
        this.weatherInfo = selectedHotel.weather;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
