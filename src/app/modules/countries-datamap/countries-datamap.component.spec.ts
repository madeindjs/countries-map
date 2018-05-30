import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesDatamapComponent } from './countries-datamap.component';

describe('CountriesDatamapComponent', () => {
  let component: CountriesDatamapComponent;
  let fixture: ComponentFixture<CountriesDatamapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesDatamapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesDatamapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
