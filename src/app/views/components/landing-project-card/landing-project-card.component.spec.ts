import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingProjectCardComponent } from './landing-project-card.component';

describe('LandingProjectCardComponent', () => {
  let component: LandingProjectCardComponent;
  let fixture: ComponentFixture<LandingProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingProjectCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
