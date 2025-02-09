import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() toggle = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onToggle() {
    this.toggle.emit(this.todo.id);
  }

  onDelete() {
    this.delete.emit(this.todo.id);
  }
}