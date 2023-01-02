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

  scrollLeft(){
    const scrollContainer = document.getElementById("scroll-container") as HTMLDivElement;
    scrollContainer.scrollBy(-20, 0);
  }

  scrollRight(){
    document.getElementById("scroll-container")?.scrollBy(20, 0);
  }

}
