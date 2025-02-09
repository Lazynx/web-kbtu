import { Component } from '@angular/core';
import { TodoListComponent } from './todo/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoListComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'todo-angular';
}
