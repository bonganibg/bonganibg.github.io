import { Injectable } from '@angular/core';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref } from 'firebase/database';
import { VisitorMessage } from 'src/app/models/message.model';

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
export class ContactService {

  constructor() { }

  public name_surname_regEx = new RegExp("^[a-zA-Z0=9\\s-]+$");
  public email_regEx = new RegExp("^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$");



  createNewMessage(message: VisitorMessage)
  {
    let dateTime = new Date();
    let ID = `${dateTime.getDate()}${dateTime.getDay()}${dateTime.getHours()}${dateTime.getMinutes()}${dateTime.getMilliseconds()}`

    // Don't worry, I can also see what's wrong with this xD, I'll link the site to my email in the next update
    set(ref(database, 'Messages/'+ ID), message)
    .then(() => {
      alert("Message has been sent successfully!")
    })
    .catch(() => {
      alert("Interal error, message not sent")
    });
  }
}
