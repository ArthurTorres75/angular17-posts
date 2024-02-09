import { Post } from './post';

export interface IPostRequestResponse {
  loading: boolean;
  posts: Post[];
}
