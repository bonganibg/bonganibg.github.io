import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  async getProjectTags(){
    return await axios({
      method: 'GET',
      baseURL: environment.API_BASE_URL,
      url: environment.API_PROJECT_TAG_ENDPOINT,
    })
  }

  async getProjects(){
    return await axios({
      method: 'GET',
      baseURL: environment.API_BASE_URL,
      url: environment.API_PROJECT_ENDPOINT,
    })
  }
}