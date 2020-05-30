import { Component } from '@angular/core';
import { favoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'david';
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
