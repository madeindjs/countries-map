import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesDatamapComponent } from './countries-datamap.component';

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents: [CountriesDatamapComponent],
  declarations: [CountriesDatamapComponent],
  exports: [
    CountriesDatamapComponent
  ]
})
export class CountriesDatamapModule { }
