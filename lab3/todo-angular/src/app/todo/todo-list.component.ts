import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo.model';
import { TodoItemComponent } from './todo-item.component';
import { TodoInputComponent } from './todo-input.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, TodoInputComponent],
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  todos: Todo[] = [];

  addTodo(text: string) {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false
    };
    this.todos.push(newTodo);
  }

  toggleTodo(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}