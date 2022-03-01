import { Injectable } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getDatabase,ref, get } from 'firebase/database';
import { FeaturedProjects } from '../models/featured.model';
import { Heading } from '../models/header.model';
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


  heading!: Heading;



    getFeatured()
    {

    }

  // Get the information from the heading section
  getHeadingInformation()
  {

  }

  // Get the information for the skills section
  getSkillsInformation()
  {

  }


  loadHomepageInfo()
  {

  }

  loadHeader()
  {
    let headingRef = ref(database, 'Homepage/Heading');

    get(headingRef).then((snapshot)=>{
      let data = snapshot.val();
      this.heading = data;
      console.log(this.heading)
    })


  }

}
