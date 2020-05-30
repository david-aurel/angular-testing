import { Component } from '@angular/core';

@Component({
  selector: 'truncate',
  templateUrl: './truncate.component.html',
  styleUrls: ['./truncate.component.css'],
})
export class TruncateComponent {
  text =
    'Truncated text using a custom pipe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nunc tincidunt, tempus risus ut, sodales felis. Integer vestibulum bibendum ultrices. Sed scelerisque accumsan nibh, sed vehicula metus mattis eu. Cras varius vel ligula in aliquam. Nullam sit amet sem et mauris euismod sollicitudin. Sed viverra dignissim cursus. Duis.';
}
