/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as express from 'express';
import cors from 'cors';

// mock data
import { posts, comments } from './app/mock';

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to personal-blog-backend!' });
});

app.get('/api/posts', (req, res) => {
  res.send(posts);
});

app.get('/api/posts/:id', (req, res) => {
  console.log('Request Id:', req.params.id);
  res.send(posts[0]);
});

app.get('/api/comments', (req, res) => {
  res.send(comments);
});

app.post('/api/comments', (req, rest) => {
  rest.send(comments[0]);
});

app.post('/api/authenticate', (req, rest) => {
  rest.send({
    auth_token: 'token',
    name: 'Matias Iordache',
    avatar: 'assets/img/matias.jpg'
  });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
