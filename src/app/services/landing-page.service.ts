import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LandingPageModel } from '../models/landing-page.model';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor(private httpClient: HttpClient) { }

  landingPageData!: LandingPageModel;

  loadPageData(){
    const url: string = environment.PAGE_DATA_LANDING_PAGE;
    return this.httpClient.get(url)
  }
}
