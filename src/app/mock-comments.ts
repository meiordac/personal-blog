import {Comment} from './comment'

export const COMMENTS: Comment[] = [
  {
  id: 1,
  id_post: 1,
  content: 'hello this is my first comment',
  author: "Matias Iordache",
  published_at: new Date(2016, 11, 7),
  avatar: "assets/img/matias.jpg"
    
  },

  {
  id: 2,
  id_post: 1,
  content: 'now this is my second comment',
  author: "Matias Iordache",
  published_at: new Date(2016, 10, 7),
  avatar: "assets/img/matias.jpg"
    
  }
];