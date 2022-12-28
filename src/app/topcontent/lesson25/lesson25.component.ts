import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson25',
  templateUrl: './lesson25.component.html',
  styleUrls: ['./lesson25.component.css']
})
export class Lesson25Component implements OnInit {

  title = 'Dispaly Data *ngIf and ng-container lesson #25';
  isDisplayed = false;

  cats = new Array<Cat>();


  constructor() {
    this.cats.push(
      new Cat('Kitty', 12),
      new Cat('Simba', 5),
      new Cat('Kocur', 5),
      new Cat('Puszek', 4),
      new Cat('Azor', 9),
      new Cat('Pluto', 15),
      new Cat('Artemiz', 11)
    );
   }

  ngOnInit(): void {
  }

}

class Cat {
  constructor(public name: string, public age: number) {}
}
