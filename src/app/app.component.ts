import { Component } from '@angular/core';

class Todo {
  title: string;
  completed: boolean;
}

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
  title: string = 'Angular 2Do';
  todos: Todo[] = todos;

  toggle(todo: Todo) {
    todo.completed = !todo.completed;
  }

  delete(todo: Todo) {
    let index = this.todos.indexOf(todo);

    if(index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
