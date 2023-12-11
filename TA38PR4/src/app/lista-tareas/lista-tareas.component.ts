import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from '../todo.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css',
})
export class ListaTareasComponent {
  @Input() task?: Todo;
  faCheck = faCheck;
  todoService: TodoService;

  constructor(private service: TodoService) {
    this.todoService = service;
  }
  
  taskDone(toDo: any) {
    const list = this.todoService.getToDo();
    const index = list.findIndex((todo) => todo.title === toDo.title);
    if (index !== -1) {
      toDo.done = true;
      list[index] = toDo;
    }
  }
}
