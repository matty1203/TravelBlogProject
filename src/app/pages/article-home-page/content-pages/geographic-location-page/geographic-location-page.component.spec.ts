import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographicLocationPageComponent } from './geographic-location-page.component';

describe('GeographicLocationPageComponent', () => {
  let component: GeographicLocationPageComponent;
  let fixture: ComponentFixture<GeographicLocationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeographicLocationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeographicLocationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
