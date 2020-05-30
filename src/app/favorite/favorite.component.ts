import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent {
  @Input('isFavorite') isFavorite: boolean;
  @Output('change') change = new EventEmitter();
  starIcon = faStar;
  starIconEmpty = faStarEmpty;

  handleClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite });
  }
}
export interface favoriteChangedEventArgs {
  newValue: boolean;
}
