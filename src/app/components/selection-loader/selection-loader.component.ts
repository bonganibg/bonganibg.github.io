import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selection-loader',
  template: `
    <div [ngStyle]="getStyles()" class="skelt-load loader"></div>
  `  ,
  styleUrls: ['./selection-loader.component.css']
})
export class SelectionLoaderComponent implements OnInit {

  @Input() cWidth!: any;
  @Input() cHegiht!: any;
  @Input() circle!: boolean;



  constructor() { }

  ngOnInit(): void {
  }

  getStyles()
  {
    const myStyles = {
      'width.px': this.cWidth ? this.cWidth : '',
      'height.px': this.cHegiht ? this.cHegiht : '',
      'border-radius': this.circle ? '50?' : ''
    }
    return myStyles;
  }

}
