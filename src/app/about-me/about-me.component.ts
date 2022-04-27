import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutMe } from '../models/about.model';
import { ViewingStat } from '../models/stat.model';
import { PublicService } from '../public.service';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private aboutService: AboutService,
              private route: ActivatedRoute) { }



  loading = true;

  aboutMe!: AboutMe;
  async ngOnInit() {
    this.loading = true;

    this.route.data.subscribe();

    let stat: ViewingStat = {
      Date: new Date(),
      Message: "Viewing About",
      Page: "About Page",
      Time: new Date().getUTCDay().toString()
    }

    PublicService.WriteStat(stat);

    await this.aboutService.loadAboutMe();

    this.aboutMe = this.aboutService.getAboutMe();

    this.loading = false;
  }

}
