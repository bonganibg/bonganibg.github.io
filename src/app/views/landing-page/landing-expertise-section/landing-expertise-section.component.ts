import { Component, OnInit, Input } from '@angular/core';
import { LandingExpertiseModel } from 'src/app/models/landing-page.model';

@Component({
  selector: 'app-landing-expertise-section',
  templateUrl: './landing-expertise-section.component.html',
  styleUrls: ['./landing-expertise-section.component.css']
})
export class LandingExpertiseSectionComponent implements OnInit {

  constructor() { }

  @Input() expertise!: LandingExpertiseModel[];

  ngOnInit(): void {
    console.log(this.expertise)
  }

}
