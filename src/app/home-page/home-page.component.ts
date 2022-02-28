import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FeaturedProjects } from '../models/featured.model';
import { Heading } from '../models/header.model';
import { Skills } from '../models/skills.model';
import { HomepageService } from './homepage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss', './skills.component.scss',
              './responsive.component.scss','./featured.component.scss',
              './featured-project-info.component.scss' ]
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
    this.featuredProjectData = this.homeService.getFeaturedProjects();

    // Load the list of projects



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

    })
  }


}
