import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCultureComponent } from './food-culture.component';

describe('FoodCultureComponent', () => {
  let component: FoodCultureComponent;
  let fixture: ComponentFixture<FoodCultureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodCultureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
