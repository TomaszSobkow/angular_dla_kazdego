import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction-child',
  templateUrl: './interaction-child.component.html',
  styleUrls: ['./interaction-child.component.css']
})
export class InteractionChildComponent implements OnInit {

  title = "Interaction Child";
  
  @Input()
  tasks: any;

  constructor() { }

  ngOnInit(): void {
  }

}
