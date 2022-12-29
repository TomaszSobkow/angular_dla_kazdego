import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {

  title = "Interaction of Components";
  tasks = ["Task","Task","Task","Task"];

  constructor() { }

  ngOnInit(): void {
  }

}
