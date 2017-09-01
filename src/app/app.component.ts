import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isShown = false;
  showText(event) {
    this.isShown = !this.isShown;
  }
  printName() {
    console.log('This app is so awesome!');
  }
}
