import { Injectable } from '@angular/core';
import { AboutMe } from '../models/about.model';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, get, set } from "firebase/database";

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
export class AboutService {

  constructor() { }

  aboutMe!: AboutMe;


  getAboutMe()
  {
    return this.aboutMe;
  }

  // Get the about me
  async loadAboutMe()
  {
    // About ref
    let aboutRef = ref(database, 'About');

    await get(aboutRef).then((snapshot) =>{
      let data = snapshot.val();
      this.aboutMe = data;
    });
  }


}
