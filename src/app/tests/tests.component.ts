import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests',
  template: '<h2 class="text-special">Welcome {{name}}</h2>  <input [id]="myId"type="text" value="Vishwas">',
  styles: ['.text-special {color: green;}']
})
export class TestsComponent implements OnInit {
  public name = "Vishwas"
public myId="testId"
  constructor() { }

  ngOnInit(): void {
  }
  greetUser() {
    return "Hello " + this.name;
  }
}
