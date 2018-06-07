import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';


import { AppComponent } from './app.component';
import { DateToTimePipe } from './common/pipes/date-to-time.pipe';
import {MenuComponent} from './widget-body/menu/menu.component';
import { HotelsGridComponent } from './widget-body/hotels-grid/hotels-grid.component';
import { HotelCardComponent } from './widget-body/hotels-grid/hotel-card/hotel-card.component';
import {HotelDataService} from './widget-body/hotels-grid/hotel-data.service';
import { GetPropertyPipe } from './common/pipes/get-property.pipe';
import { FilterByPipe } from './common/pipes/filter-by.pipe';
import { WeatherWidgetComponent } from './widget-body/weather-widget/weather-widget.component';
import { SocialWidgetComponent } from './widget-body/social-widget/social-widget.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { WidgetBodyComponent } from './widget-body/widget-body.component';


@NgModule({
  declarations: [
    AppComponent,
    DateToTimePipe,
    MenuComponent,
    HotelsGridComponent,
    HotelCardComponent,
    GetPropertyPipe,
    FilterByPipe,
    WeatherWidgetComponent,
    SocialWidgetComponent,
    WidgetBodyComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    HotelDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
