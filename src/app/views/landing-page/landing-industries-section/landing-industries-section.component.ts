import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LandingIndustriesHeading, LandingIndustryModel } from 'src/app/models/landing-page.model';

@Component({
  selector: 'app-landing-industries-section',
  templateUrl: './landing-industries-section.component.html',
  styleUrls: ['./landing-industries-section.component.css']
})
export class LandingIndustriesSectionComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() industries!: LandingIndustryModel[];
  @Input() header!: LandingIndustriesHeading;

  currentIndex!: number;

  ngOnInit() {

  }

  scrollRight(){
    document.getElementById("industry-scroll-container")?.scrollBy(20, 0);
  }

  scrollLeft(){
    document.getElementById("industry-scroll-container")?.scrollBy(-20, 0);
  }

}
