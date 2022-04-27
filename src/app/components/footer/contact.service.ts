import { Injectable } from '@angular/core';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref } from 'firebase/database';
import { VisitorMessage } from 'src/app/models/message.model';
import axios, { Axios } from 'axios';

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

  email = {personalizations: [{to: [{email: "bongani.gumbo@yahoo.com"}], subject: "Bonganibg.github.io"}], from: {email: "alphashorts@gmail.com"}, content: [{type: "text/html", value: ""}] };



  createNewMessage(message: VisitorMessage)
  {

    let sendMessage = `<h4>From:</h4> ${message.Name}, ${message.Email} <br> <h4> Message:</h4> <br><br> <p> ${message.Message} </p>`;
    this.email.content[0].value = sendMessage;
    let options = {
      method: 'POST',
      url: 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'dbd7a233e1msh6a06514d697f92cp103f95jsn8abb7664ef9d'
      },
      data: JSON.stringify(this.email)
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      alert("Message has been sent");
    }).catch(function (error) {
      console.error(error);
    });
  }
}
