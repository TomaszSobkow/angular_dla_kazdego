import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {


  tasksFromChild: string[] = [];

  newTask(taks: string) {
    this.tasksFromChild.push(taks)
  }

  title = "interaction.components";
  tasksFromParent = ["Task","Task","Task","Task"];


  constructor() { }

  ngOnInit(): void {
  }

}
