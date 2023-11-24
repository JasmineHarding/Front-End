import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-message-app';
  message: string = '';
  displayText: string = 'Hello World';

  displayMessage(): void {
    this.displayText = this.message;
  }
}
