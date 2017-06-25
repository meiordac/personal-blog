export class Comment {
  constructor(
    id: number = null,
    id_post: number = null,
    content: string = '',
    author: string = '',
    published_at: Date,
    upvotes: number = 0,
    downvotes: number = 0,
    avatar: string = ''
  ) { }
}
