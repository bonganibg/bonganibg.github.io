import { Injectable } from '@angular/core';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getDatabase, get, ref } from 'firebase/database';
import { Project } from '../models/project.model';

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
export class ProjectService {

  constructor() { }

  projects!: Project[];

  // Get All of the projects
  getProjects()
  {
    return this.projects;
  }

  async loadProjects()
  {
    let projectRef = ref(database, 'Projects');

    await get(projectRef).then((snap) =>{
      let data = snap.val();
      this.projects = data;
    });
  }
}
