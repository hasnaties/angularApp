import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularApp';
  clicked:boolean;
  logs: any;
  itemNo: number;

  constructor() {
    this.clicked = false;
    this.logs = [];
    this.itemNo = 1;
  }

  buttonClick() {
    this.clicked = true;
    this.logs.push('Click No.' + this.itemNo)
    this.itemNo = this.itemNo + 1;
  }

  logReached(){
    return this.itemNo >= 5 ? true : false;
  }
}
