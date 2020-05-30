import { Component } from '@angular/core';

@Component({
  selector: 'ngif',
  templateUrl: './ngif.component.html',
})
export class NgIfComponent {
  courses = ['course1', 'course2', 'course3'];
  viewMode = 'map';

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
