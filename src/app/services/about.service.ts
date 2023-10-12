import { Injectable } from '@angular/core';
import axios from 'axios';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private firebaseService: FirebaseService) {
  }

  async getAboutMe(){
    return await this.firebaseService.get("about_me/")
  }

  async getTechnologies(){
    return await this.firebaseService.get("technologies/")
  }
}
