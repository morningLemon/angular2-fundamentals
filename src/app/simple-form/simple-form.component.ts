import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      {{message}}<br>
      <input #myInput type="text" [(ngModel)]="message"/>
      <br>
      <button (mouseover)="onClick($event, myInput.value)">Click me</button>
      <br>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  @Output() update = new EventEmitter();

  onClick(event, value) {
    console.log(event);
    console.log(value);
  }

  constructor() {
    setInterval(() => this.message = Math.random().toString(), 1000);
  }

  ngOnInit() {
  }

}
