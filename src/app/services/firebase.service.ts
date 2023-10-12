import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, get } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCctuwvda-g6wteYDdNsbCzNewZY1hAmM4",
  authDomain: "bonganibg-999ff.firebaseapp.com",
  projectId: "bonganibg-999ff",
  storageBucket: "bonganibg-999ff.appspot.com",
  messagingSenderId: "721887010028",
  appId: "1:721887010028:web:d448a57da0345c826cd9c9",
  measurementId: "G-76JSMEW08B"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase(app);

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor() {}

  /**
   * Get the database item
   * @param path Path to the file
   * @returns database object
   */
  async get(path: string){
    let output;

    await get(ref(db, path)).then((result) => {
      output = result.val();
    }).catch((error) => {
      console.log("Error")
    });

    return output;
  }
}
