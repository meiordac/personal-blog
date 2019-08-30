import { Post } from './post';

export class Comment {
  _id?: string;
  content: string;
  author: string;
  published_at: Date;
  upvotes?: number;
  downvotes?: number;
  post: Post;
}
