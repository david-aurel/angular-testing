import { Component, Input } from '@angular/core';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
})
export class ZippyComponent {
  @Input('title') title: string;
  isActive = false;

  arrowUpIcon = faSortUp;
  arrowDownIcon = faSortDown;

  toggle() {
    this.isActive = !this.isActive;
  }
}
