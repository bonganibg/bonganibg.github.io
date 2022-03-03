import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutMe } from '../models/about.model';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private aboutService: AboutService,
              private route: ActivatedRoute) { }


  aboutMe!: AboutMe;
  async ngOnInit() {
    this.route.data.subscribe();

    await this.aboutService.loadAboutMe();

    this.aboutMe = this.aboutService.getAboutMe();
  }

}
