import { Injectable } from '@angular/core';
import { AboutSection } from '../models/about-section.model';
import { AboutMe } from '../models/about.model';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, get, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDnR6ClduSIL2xpvOCWgXvBeQV4tEIZu70",
  authDomain: "bonganibg-dev.firebaseapp.com",
  projectId: "bonganibg-dev",
  storageBucket: "bonganibg-dev.appspot.com",
  messagingSenderId: "709357238816",
  appId: "1:709357238816:web:bfc7d777c216eba7ef1a45",
  measurementId: "G-LRKSL3Y9VG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  aboutMe!: AboutMe[];

  // Get the about me
  getAboutMe()
  {
    // About ref
    let aboutRef = ref(database, 'About');

    get(aboutRef).then((snapshot) =>{
      let data = snapshot.val();
      console.log(data);
    });


    return this.aboutMe;
  }


}
