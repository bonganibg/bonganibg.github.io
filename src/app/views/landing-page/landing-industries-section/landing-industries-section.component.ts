import { Component, OnInit, Input } from '@angular/core';
import { LandingIndustriesHeading, LandingIndustryModel } from 'src/app/models/landing-page.model';

@Component({
  selector: 'app-landing-industries-section',
  templateUrl: './landing-industries-section.component.html',
  styleUrls: ['./landing-industries-section.component.css']
})
export class LandingIndustriesSectionComponent implements OnInit {

  constructor() { }

  @Input() industries!: LandingIndustryModel[];
  @Input() header!: LandingIndustriesHeading;

  ngOnInit(): void {
  }

}
