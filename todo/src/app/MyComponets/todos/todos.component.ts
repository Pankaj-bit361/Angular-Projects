import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-list',
  template: `
    <h2>Todo List</h2>
    <ul>
      <li *ngFor="let todo of todos">
        {{ todo.title }}
      </li>
    </ul>
  `,
})
export class TodosComponent {
  todos: Todo[] = [
    { id: 1, title: 'Learn Angular', active: false },
    { id: 2, title: 'Build a Todo App', active: false },
    { id: 3, title: 'Master TypeScript', active: false },
  ];
}
