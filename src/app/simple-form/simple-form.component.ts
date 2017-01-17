import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      {{message}}<br>
      <input #myInput type="text"/>
      <br>
      <button (mouseover)="onClick($event, myInput.value)">Click me</button>
      <br>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  onClick(event, value) {
    console.log(event);
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
