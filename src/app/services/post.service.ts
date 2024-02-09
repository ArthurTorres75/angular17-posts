import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { getTime } from 'date-fns';
import { environment } from './../../environments/environment.prod';

// INTERFACES
import { Post } from '../interfaces/post';
import { IPostRequestResponse } from '../interfaces/post-req-resp';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private http = inject(HttpClient);

  #state = signal<IPostRequestResponse>({
    loading: true,
    posts: [],
  });

  public posts = computed(() =>
    this.#state()
      .posts.sort((a, b) => b.id - a.id)
      .sort((a, b) => getTime(b.created_at!) - getTime(a.created_at!))
      .slice(0, 19)
  );
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.getPosts();
  }

  private addMockCreatedDate(data: Post[]): Post[] {
    return data.map((post) => {
      return { ...post, created_at: new Date() };
    });
  }

  getPosts() {
    this.http.get<Post[]>(environment.url).subscribe(
      (data) => {
        this.#state.set({
          loading: false,
          posts: this.addMockCreatedDate(data),
        });
      },
      (error) => {
        this.#state.set({
          loading: false,
          posts: [],
        });
      }
    );
  }

  private randomNumber() {
    const min = 1000;
    const max = 9999;
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

  private prepareNewPosts(data: Post): Post[] {
    let posts = this.posts();
    const post: Post = { ...data, created_at: new Date() };
    posts.push(post);

    return [...posts];
  }

  createPost(body: Post) {
    body.userId = this.randomNumber();

    this.http
      .post<Post>(environment.url, body, {
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      })
      .subscribe(
        (data) => {
          this.#state.set({
            loading: false,
            posts: this.prepareNewPosts(data),
          });
        },
        (error) => {
          this.#state.set({
            loading: false,
            posts: [...this.posts()],
          });
        }
      );
  }
}
