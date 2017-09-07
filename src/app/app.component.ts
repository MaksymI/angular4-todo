import { Component } from '@angular/core';

const todos = [
  {
    title: 'learn JS6',
    completed: true
  },
  {
    title: 'learn Angular4',
    completed: false
  },
  {
    title: 'write simple app',
    completed: false
  }
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

  toggle(todo) {
    todo.completed = !todo.completed;
  }

  delete(todo) {
    let index = this.todos.indexOf(todo);

    if(index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
