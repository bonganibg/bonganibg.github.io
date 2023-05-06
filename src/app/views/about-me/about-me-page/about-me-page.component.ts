import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AboutSectionModel, LinkModel } from 'src/app/models/about-page-model';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.css']
})
export class AboutMePageComponent implements OnInit {

  constructor(private aboutService: AboutService) {

  }

  aboutMe!: AboutSectionModel[];
  hasLoaded = false;

  @Output() links = new EventEmitter<LinkModel[]>();

  async ngOnInit() {
    await this.loadAboutMe();
  }

  async loadAboutMe(){
    this.hasLoaded = false;
    this.aboutService.getAboutMe().then((response) => {
      this.aboutMe = response.data.about;
      this.links.emit(this.sendLinks());
      this.hasLoaded = true;
    })
    .catch(async () => {
      await this.loadAboutMe();
      return;
    })
  }

  sendLinks(): LinkModel[]{
    let links: LinkModel[] = [];

    this.aboutMe.forEach(item => {
      links.push({
        index: item._id,
        title: item.heading
      })
    })

    return links;
  }

}
