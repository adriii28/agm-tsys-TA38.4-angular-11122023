import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormularioTareaComponent } from './formulario-tarea/formulario-tarea.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormularioTareaComponent, ListaTareasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TA38PR4';
  todo : any;
  constructor(private todoService: TodoService) {
    this.todo = this.todoService.getToDo();
  }
}
