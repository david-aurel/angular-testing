import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';
import { PostService } from 'src/app/services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts;

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAll().subscribe((posts) => (this.posts = posts));
  }

  createPost(input: HTMLInputElement) {
    interface Post {
      title: string;
      id?: number;
    }
    const post: Post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post).subscribe(
      (newPost: { id: number }) => {
        post.id = newPost.id;
        console.log('newPost:', newPost);
      },
      (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadInput) {
          // this.form.setErrors(error.json)
        } else {
          throw error;
        }
      }
    );
  }

  updatePost(post) {
    this.service
      .udpate(post, { isRead: true })
      .subscribe((updatedPost) => console.log(updatedPost));
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id).subscribe(null, (error: AppError) => {
      this.posts.splice(index, 0, post);
      if (error instanceof NotFoundError) {
        alert('This post has already been deleted');
      } else {
        throw error;
      }
    });
  }
}
