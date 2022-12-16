import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingIndustriesSectionComponent } from './landing-industries-section.component';

describe('LandingIndustriesSectionComponent', () => {
  let component: LandingIndustriesSectionComponent;
  let fixture: ComponentFixture<LandingIndustriesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingIndustriesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingIndustriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
