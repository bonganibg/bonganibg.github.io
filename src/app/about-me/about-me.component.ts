import { Component, OnInit } from '@angular/core';
import { AboutMe } from '../models/about.model';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private aboutService: AboutService) { }


  aboutMe!: AboutMe;
  async ngOnInit() {

    await this.aboutService.loadAboutMe();

    this.aboutMe = this.aboutService.getAboutMe();
  }

}
