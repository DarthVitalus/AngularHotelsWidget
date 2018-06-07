import {Component, OnDestroy} from '@angular/core';
import {HotelDataService} from '../hotels-grid/hotel-data.service';

@Component({
  selector: 'app-social-widget',
  templateUrl: './social-widget.component.html',
  styleUrls: ['./social-widget.component.css']
})
export class SocialWidgetComponent implements OnDestroy {

  public socialInfo: SocialInfo;
  subscription: any;

  constructor(
    private _hotelDataService: HotelDataService
  ) {
    this.subscription = this._hotelDataService.selectedHotel$.subscribe(
      selectedHotel => {
        this.socialInfo = selectedHotel.socialInfo;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
