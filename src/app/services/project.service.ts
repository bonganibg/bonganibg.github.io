import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  constructor(private database: FirebaseService)
  {
  }

  async getProjectTags(){
    return await axios({
      method: 'GET',
      baseURL: environment.API_BASE_URL,
      url: environment.API_PROJECT_TAG_ENDPOINT,
    })
  }

  async getProjects(){
    const output = await this.database.get("projects/");
    return output;
  }
}
