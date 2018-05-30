import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CountriesMapModule } from './modules/countries-map/countries-map.module';
import { CountriesDatamapComponent } from './modules/countries-datamap/countries-datamap.component';
import { DemoComponent } from './demo.component';


@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CountriesMapModule,
    CountriesDatamapComponent,
    BrowserModule
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class DemoModule { }
