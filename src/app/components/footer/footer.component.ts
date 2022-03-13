import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { VisitorMessage } from 'src/app/models/message.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private contactService: ContactService,
             private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  getFormInfo(form: NgForm){

    alert(form)
    console.log();
    if (form.invalid)
    {
      return;
    }
    else
    {
      console.log(form)
      if (this.contactService.email_regEx.test(form.value.inputEmail) && this.contactService.name_surname_regEx.test(form.value.inputName))
      {
          let userMessage: VisitorMessage =
          {
            Email: form.value.inputEmail,
            Name: form.value.inputName,
            Message: form.value.inputMessage
          }
          this.contactService.createNewMessage(userMessage);
      }
      else{
        alert("Message not sent");
      }
    }
  }
}
