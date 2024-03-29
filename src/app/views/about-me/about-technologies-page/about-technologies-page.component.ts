import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LinkModel, TechnologiesModel, TechnologiesSectionModel } from 'src/app/models/about-page-model';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about-technologies-page',
  templateUrl: './about-technologies-page.component.html',
  styleUrls: ['./about-technologies-page.component.css']
})
export class AboutTechnologiesPageComponent implements OnInit {

  @Output() links = new EventEmitter<LinkModel[]>();

  constructor(private aboutService: AboutService) { }

  technologies!: TechnologiesSectionModel[];
  hasLoaded = false;

  async ngOnInit() {
    await this.loadTechnologies();
  }

  async loadTechnologies(){
    this.hasLoaded = false;
    this.technologies = await this.aboutService.getTechnologies() || [];
    this.links.emit(this.sendLinks());
    this.hasLoaded = true;
  }

  sendLinks(): LinkModel[]{
    let links: LinkModel[] = [];

    this.technologies.forEach(item => {
      links.push({
        index: item._id,
        title: item.heading
      })
    })

    return links;
  }

}
