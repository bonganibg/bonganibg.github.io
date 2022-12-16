import { Component, OnInit, Input } from '@angular/core';
import { LandingHeroModel } from 'src/app/models/landing-page.model';

@Component({
  selector: 'app-landing-hero',
  templateUrl: './landing-hero.component.html',
  styleUrls: ['./landing-hero.component.css']
})
export class LandingHeroComponent implements OnInit {

  constructor() { }

  @Input() content!: LandingHeroModel;



  ngOnInit(): void {
    console.log(this.content)
  }

}
