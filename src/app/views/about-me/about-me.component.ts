import { Component, OnInit } from '@angular/core';
import { LinkModel } from 'src/app/models/about-page-model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  currentPage = 0;

  links: LinkModel[] = []

  ngOnInit(): void {
  }

  changePage(page: number){
    if (page > -1 && page < 4)
    this.currentPage = page;
  }

  getClass(page: number){
    return page == this.currentPage ? "tab px-0" : "tab px-0 tab-active";
  }

}
