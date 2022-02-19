import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FeaturedProjects } from '../models/featured.model';
import { Heading } from '../models/header.model';
import { Skills } from '../models/skills.model';
import { HomepageService } from './homepage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private homeService: HomepageService) {
   this.parallaxFunction();
  }

  featuredProjectData!: FeaturedProjects;
  headerData!: Heading;
  skillsData!:  Skills;

  ngOnInit(): void {
    // Load the header information
    this.headerData = this.homeService.getHeadingInformation();

    // Load the featured project information

    // Load the list of projects

    // Load the skills information
    this.skillsData = this.homeService.getSkillsInformation();
  }







  // Parallax things
  parallaxFunction()
  {
    window.addEventListener('scroll', function(e){
      // Header scrolling
      const logo = document.querySelector('.scroll') as HTMLSelectElement;
      const circle = this.document.querySelector('.hero-background-item') as HTMLSelectElement;

      var scrolled = window.pageYOffset;
      var rate = scrolled * 0.1;
      logo.style.transform = `translate3d(${rate}px, 0px, 0px)`;

      var circleRate = scrolled * 0.15;
      circle.style.transform = `translate3d(1px, ${circleRate}px, 0px)`;



      // Skills letter Scrolling
      const left = document.querySelector('.scroll-left') as HTMLScriptElement;
      const right = document.querySelector('.scroll-right') as HTMLScriptElement;

      var textRate = scrolled * 0.5;
      left.style.transform = `translate3d(${textRate}px, 0px, 0px)`;
      right.style.transform = `translate3d(-${textRate}px, 0px, 0px)`;

    })
  }


}
