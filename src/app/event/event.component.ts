import { Component } from '@angular/core';

@Component({
  selector: 'eventhandling',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent {
  isActive = true;
  onSave($event) {
    console.log('button was clicked', $event);
  }
  onKeyUp(email) {
    console.log(email);
  }
}
