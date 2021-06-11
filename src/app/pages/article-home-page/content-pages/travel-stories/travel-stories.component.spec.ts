import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelStoriesComponent } from './travel-stories.component';

describe('TravelStoriesComponent', () => {
  let component: TravelStoriesComponent;
  let fixture: ComponentFixture<TravelStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
