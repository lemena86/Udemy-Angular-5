import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  username = '';
  showParagraph = false;
  logButtonClicks = [];

  usernameIsEmpty() {
    return this.username === '';
  }
  onResetUsername() {
    this.username = '';
  }
  onDisplayDetails() {
    this.showParagraph = !this.showParagraph;
    this.logButtonClicks.push(+new Date);
  }
}
