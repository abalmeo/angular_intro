import { Component } from '@angular/core';

@Component({
  // used in html element in index.html
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crash0todolist';
  name: string = 'Alvin';

  constructor() {
    this.changeName('John');
  }

  changeName(name: string): void {
    this.name = name;
  }
}
