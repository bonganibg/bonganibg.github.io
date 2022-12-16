import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingServicesSectionComponent } from './landing-services-section.component';

describe('LandingServicesSectionComponent', () => {
  let component: LandingServicesSectionComponent;
  let fixture: ComponentFixture<LandingServicesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingServicesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingServicesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
