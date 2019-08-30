import { User } from './user';

export class Post {
  _id?: string;
  title: string;
  content: string;
  author: User;
  image: string;
  published_at: Date;
}
