import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyPageComponent } from './safety-page.component';

describe('SafetyPageComponent', () => {
  let component: SafetyPageComponent;
  let fixture: ComponentFixture<SafetyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
