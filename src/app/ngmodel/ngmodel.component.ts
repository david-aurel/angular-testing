import { Component } from '@angular/core';

@Component({
  selector: 'ngmodel',
  templateUrl: './ngmodel.component.html',
  styleUrls: ['./ngmodel.component.css'],
})
export class NgmodelComponent {
  email = 'me@example.com';
  onKeyUp() {
    console.log(this.email);
  }
}
