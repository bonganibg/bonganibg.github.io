import { Injectable, ɵɵsetComponentScope } from '@angular/core';
import { ControlContainer, NgControlStatus } from '@angular/forms';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getDatabase,ref, get } from 'firebase/database';
import { FeaturedProjects } from '../models/featured.model';
import { Heading } from '../models/header.model';
import { Homepage } from '../models/homepage.model';
import { Project } from '../models/project.model';
import { Skills } from '../models/skills.model';

const firebaseConfig = {
  apiKey: "AIzaSyBBiaSJ9auUVniwoCQ9IxLilzFCFSvpKd4",
  authDomain: "bonganibg-io.firebaseapp.com",
  projectId: "bonganibg-io",
  storageBucket: "bonganibg-io.appspot.com",
  messagingSenderId: "1033199486302",
  appId: "1:1033199486302:web:a0236d179bd5d3781b3bcf",
  measurementId: "G-NGHEEYLMPJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();


@Injectable({
  providedIn: 'root'
})
export class HomepageService
{
  constructor() { }

  homepage!: Homepage;
  heading!: Heading;
  skills!: Skills;
  featuredProjects!: Project[];


  async loadInformation()
  {
    let homeRef = ref(database, 'Homepage');

    await get(homeRef).then((snapshot) => {
      let data = snapshot.val();
      this.homepage = data;
      console.log(this.homepage);
    });
  }


  getSkills()
  {
    this.skills = this.homepage.Skills;
    return this.skills;
  }



  getHeader()
  {
    this.heading = this.homepage.Heading;
    return this.heading;
  }

  getFeatured()
  {
    this.featuredProjects = this.homepage.Featured;
    return this.featuredProjects;
  }






}
