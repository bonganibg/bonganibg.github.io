import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() {
    window.addEventListener('scroll', function(e){
      // Header scrolling
      const logo = document.querySelector('.scroll') as HTMLSelectElement;
      const circle = this.document.querySelector('.hero-background-item') as HTMLSelectElement;

      var scrolled = window.pageYOffset;
      var rate = scrolled * 0.1;
      logo.style.transform = `translate3d(${rate}px, 0px, 0px)`;

      var circleRate = scrolled * 0.15;
      circle.style.transform = `translate3d(1px, ${circleRate}px, 0px)`;



      // Skills letter Scrolling
      const left = document.querySelector('.scroll-left') as HTMLScriptElement;
      const right = document.querySelector('.scroll-right') as HTMLScriptElement;

      var textRate = scrolled * 0.5;
      left.style.transform = `translate3d(${textRate}px, 0px, 0px)`;
      right.style.transform = `translate3d(-${textRate}px, 0px, 0px)`;


    })
  }

  ngOnInit(): void {
  }



}
