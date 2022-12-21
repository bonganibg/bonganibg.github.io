import { Component, OnInit } from '@angular/core';
import { AboutSectionModel } from 'src/app/models/about-page-model';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.css']
})
export class AboutMePageComponent implements OnInit {

  constructor(private aboutService: AboutService) { }

  aboutMe!: AboutSectionModel[];

  async ngOnInit() {
    await this.loadAboutMe();
  }

  async loadAboutMe(){
    this.aboutService.getAboutMe().then((response) => {
      this.aboutMe = response.data.about;
      console.log(this.aboutMe)
    })
    .catch(error => {
      alert("something went wron")
    })
  }

}
