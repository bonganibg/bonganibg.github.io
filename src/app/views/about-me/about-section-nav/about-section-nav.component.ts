import { Component, OnInit, Input } from '@angular/core';
import { LinkModel } from 'src/app/models/about-page-model';

@Component({
  selector: 'app-about-section-nav',
  templateUrl: './about-section-nav.component.html',
  styleUrls: ['./about-section-nav.component.css']
})
export class AboutSectionNavComponent implements OnInit {

  constructor() { }

  @Input() links!: LinkModel[];

  ngOnInit(): void {
    console.log(this.links)
  }

}
