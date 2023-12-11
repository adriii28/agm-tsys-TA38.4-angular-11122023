import { Injectable } from '@angular/core';
import { Todo } from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todo : Todo[] = [];

  addToDo(newToDo : Todo){
    this.todo.push(newToDo);
  }

  getToDo(){
    return this.todo;
  }

  editToDo(){
    
  }
}
