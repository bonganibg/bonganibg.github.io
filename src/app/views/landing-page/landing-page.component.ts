import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LandingPageModel } from 'src/app/models/landing-page.model';
import { LandingPageService } from 'src/app/services/landing-page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private landingService: LandingPageService) { }

  isLoading!: boolean;

  pageData!: LandingPageModel;

  ngOnInit() {
    this.loadPageData();
  }

  loadPageData(){
    this.landingService.loadPageData().subscribe((response) => {
      let value: any = response;
      this.pageData = value;
    });
    console.log(this.pageData);
  }

}
