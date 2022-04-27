import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FeaturedProjects } from '../models/featured.model';
import { Heading } from '../models/header.model';
import { Project } from '../models/project.model';
import { Skills } from '../models/skills.model';
import { ViewingStat } from '../models/stat.model';
import { PublicService } from '../public.service';
import { HomepageService } from './homepage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private homeService: HomepageService, private appComp: AppComponent) {
   this.parallaxFunction();
  }

  loading = true;

  headerData!: Heading;
  skillsData!:  Skills;
  projects!: Project[];

  async ngOnInit() {
    this.loading = true;
    let date = Date();

    // Load the header information
    await this.homeService.loadInformation();

    let stat: ViewingStat = {
      Date: new Date(),
      Message: "Viewing Homepage",
      Page: "Home",
      Time: new Date().getUTCDay().toString()
    }

    PublicService.WriteStat(stat);

    //Load Heading stuff
    this.headerData = this.homeService.getHeader();

    // Load Skills
    this.skillsData = this.homeService.getSkills();

    // Load Featured Projects
    this.projects = this.homeService.getFeatured();


    this.loading = false;
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
