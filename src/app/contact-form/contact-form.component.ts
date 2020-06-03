import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  categories = [
    {
      id: 1,
      name: 'Development',
    },
    {
      id: 2,
      name: 'Art',
    },
    {
      id: 1,
      name: 'Business',
    },
  ];

  submit(course) {
    console.log(course);
  }
}
