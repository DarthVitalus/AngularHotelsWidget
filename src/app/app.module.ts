import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';


import { AppComponent } from './app.component';
import { DateToTimePipe } from './date-to-time.pipe';
import {MenuComponent} from './menu/menu.component';
import { HotelsGridComponent } from './hotels-grid/hotels-grid.component';
import { HotelCardComponent } from './hotels-grid/hotel-card/hotel-card.component';
import {HotelDataService} from './hotels-grid/hotel-data.service';


@NgModule({
  declarations: [
    AppComponent,
    DateToTimePipe,
    MenuComponent,
    HotelsGridComponent,
    HotelCardComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule
  ],
  providers: [
    HotelDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
