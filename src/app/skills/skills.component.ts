import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../home-page/homepage.service';
import { Skills } from '../models/skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private homeService: HomepageService) { }

  skillsData!:  Skills;
  ngOnInit(): void {
    this.parallaxScrollingEffect();

    // Load the skills information
    this.skillsData = this.homeService.getSkillsInformation();
  }


  parallaxScrollingEffect()
  {
     window.addEventListener('scroll', function(e){
      const left = document.querySelector('.scroll-left') as HTMLScriptElement;
      const right = document.querySelector('.scroll-right') as HTMLScriptElement;

      var scrolled = window.pageYOffset;

      var textRate = scrolled * 0.5;
      left.style.transform = `translate3d(${textRate}px, 0px, 0px)`;
      right.style.transform = `translate3d(-${textRate}px, 0px, 0px)`;
     });

  }
}
