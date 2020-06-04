import { Component } from '@angular/core';
import { favoriteChangedEventArgs } from '../favorite/favorite.component';

@Component({
  selector: 'misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css'],
})
export class MiscComponent {
  post = {
    isFavorite: true,
  };
  tweet = {
    body: `Here's the body of a tweet.`,
    isLiked: false,
    likesCount: 0,
  };
  onFavoriteChanged(eventArgs: favoriteChangedEventArgs) {
    console.log('favorite changed', eventArgs.newValue);
  }
  onLikeChanged() {
    this.tweet.isLiked = !this.tweet.isLiked;
    this.tweet.likesCount += this.tweet.isLiked ? 1 : -1;
  }
}
