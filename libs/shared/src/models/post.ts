export class Post {
  get id() {
    return this._id;
  }

  _id: string;
  title: string;
  content: string;
  author: string;
  image: string;
  published_at: Date;
}
