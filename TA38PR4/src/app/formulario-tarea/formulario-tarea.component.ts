import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-formulario-tarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-tarea.component.html',
  styleUrl: './formulario-tarea.component.css',
})
export class FormularioTareaComponent {
  myForm: FormGroup;
  todoService: TodoService;

  constructor(private formBuilder: FormBuilder, private service: TodoService) {
    this.myForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.todoService = this.service;
  }

  onSubmit() {    
    const newTask: Todo = this.myForm.value as Todo;
    newTask.done=false;
    this.service.addToDo(newTask);
    this.myForm.reset();
  }
}
