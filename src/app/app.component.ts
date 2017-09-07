import { Component } from '@angular/core';

const todos = [
  'learn JS6',
  'learn Angular4',
  'write simple app'
];

@Component({
  // moduleId: module.id,
  selector: 'app-root',
  // templateUrl: 'app.component.html',
  templateUrl: './app.component.html',
  // styleUrls: ['app.component.css']
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2Do';
  todos = todos;
}
