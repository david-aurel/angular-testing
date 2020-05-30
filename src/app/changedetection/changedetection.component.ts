import { Component } from '@angular/core';

@Component({
  selector: 'changedetection',
  templateUrl: './changedetection.component.html',
  styleUrls: ['./changedetection.component.css'],
})
export class ChangedetectionComponent {
  courses = ['course1', 'course2', 'course3'];

  onAdd() {
    this.courses.push('course');
  }
  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  onUpdate(course) {
    let index = this.courses.indexOf(course);
    this.courses[index] = 'updated';
  }
}
