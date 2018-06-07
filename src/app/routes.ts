import {Route} from '@angular/router';
import {WidgetBodyComponent} from './widget-body/widget-body.component';
import {HotelDataService} from './widget-body/hotels-grid/hotel-data.service';

const hotelDataService = new HotelDataService();
const _hotels = hotelDataService.getHotels();
const _hotelTypes = hotelDataService.getHotelTypes();

const _routes: Route[] = [];

_hotelTypes.forEach((type: string) => {
  _routes.push(
    {
      path: type,
      component: WidgetBodyComponent,
      data: {
        type: type
      },
      children: [
        {
          path: ':id',
          component: WidgetBodyComponent
        }
      ]
    });
});

_routes.push(
  {
    path: '',
    component: WidgetBodyComponent,
    data: {
      type: 'default'
    }
  },
  {
    path: '**',
    redirectTo: ''
  });

export let routes: Route[] = _routes;


