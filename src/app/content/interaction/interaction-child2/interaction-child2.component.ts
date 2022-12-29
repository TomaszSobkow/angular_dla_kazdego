import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-interaction-child2',
  templateUrl: './interaction-child2.component.html',
  styleUrls: ['./interaction-child2.component.css']
})
export class InteractionChild2Component implements OnInit {

  title = "Interaction Child 2";


  @Output()
  newTask = new EventEmitter<string>();

  addTask(newTask: HTMLInputElement) {
    if(newTask.value === ''){
      window.alert('Task can not be empty!');
    }else{
      this.newTask.emit(newTask.value);
      newTask.value = '';
    }
}


  constructor() { }

  ngOnInit(): void {
  }

}
