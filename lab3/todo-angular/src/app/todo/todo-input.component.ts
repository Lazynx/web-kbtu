import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-input.component.html',
})
export class TodoInputComponent {
  newTodoText = '';
  @Output() addTodo = new EventEmitter<string>();

  onAddTodo() {
    const text = this.newTodoText.trim();
    if (text) {
      this.addTodo.emit(text);
      this.newTodoText = '';
    } else {
      alert('Input something in input field');
    }
  }
}