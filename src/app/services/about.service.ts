import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  async getQuestions(){
    return await axios({
      method: 'GET',
      baseURL: environment.API_BASE_URL,
      url: environment.API_QUESTION_ENDPOINT
    });
  }

  async getAboutMe(){
    return await axios({
      method: 'GET',
      baseURL: environment.API_BASE_URL,
      url: environment.API_ABOUT_ME_ENDPOINT
    });
  }

  async getTechnologies(){
    return await axios({
      method: 'GET',
      baseURL: environment.API_BASE_URL,
      url: environment.API_TECH_ENDPOINT
    });
  }
}
