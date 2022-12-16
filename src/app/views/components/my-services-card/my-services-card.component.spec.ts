import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyServicesCardComponent } from './my-services-card.component';

describe('MyServicesCardComponent', () => {
  let component: MyServicesCardComponent;
  let fixture: ComponentFixture<MyServicesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyServicesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyServicesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
