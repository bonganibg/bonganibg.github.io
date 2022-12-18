import { Component, OnInit, Input } from '@angular/core';
import { LandingServiceModel } from 'src/app/models/landing-page.model';

@Component({
  selector: 'app-landing-services-section',
  templateUrl: './landing-services-section.component.html',
  styleUrls: ['./landing-services-section.component.css']
})
export class LandingServicesSectionComponent implements OnInit {

  constructor() { }

  @Input() services!: LandingServiceModel[];

  ngOnInit(): void {
  }

  getNextSlider(){

  }

}
