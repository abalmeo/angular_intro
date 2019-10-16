import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  // Taking in values
  @Input() todo: Todo;
  // Emitting output to parent component
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoServie: TodoService) {}

  ngOnInit() {}

  // Set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    };

    return classes;
  }

  onToggle(todo) {
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle on server
    this.todoServie.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo) {
    // 1) Clicking on delete button in todo-item.component.html
    // 2) Goes to  todos.component.ts and deleteTodo function is called
    // 3) Going into this todo-item.component.ts(here) and emitting up, setting as output
    // 4) Catching in todos.component.html and setting deleteTodo and logging from todos.component.ts
    this.deleteTodo.emit(todo);
  }
}
