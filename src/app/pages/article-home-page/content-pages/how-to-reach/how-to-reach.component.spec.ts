import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToReachComponent } from './how-to-reach.component';

describe('HowToReachComponent', () => {
  let component: HowToReachComponent;
  let fixture: ComponentFixture<HowToReachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToReachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToReachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
