/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as express from 'express';
import * as cors from 'cors';
import models, { connectDb } from './app/models';
import { createSeeds } from './app/db/seed';
import { environment } from './environments/environment';

const app = express();
app.use(cors());

app.get('/api/posts', async (req, res) => {
  const posts = await models.Post.find().exec();
  res.send(posts);
});

app.get('/api/posts/:id', async (req, res) => {
  const post = await models.Post.findById(req.params.id).exec();
  console.log('Request Id:', req.params.id);
  res.send(post);
});

app.get('/api/comments', async (req, res) => {
  const comments = await models.Comment.find().exec();
  res.send(comments);
});

app.post('/api/comments', async (req, rest) => {
  const comment = await new models.Comment(req.body).save();
  rest.send(comment);
});

app.post('/api/authenticate', (req, rest) => {
  rest.send({
    auth_token: 'token',
    name: 'Matias Iordache',
    avatar: 'assets/img/matias.jpg'
  });
});

const port = process.env.port || 3333;

connectDb().then(async () => {
  if (environment.eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Post.deleteMany({}),
      models.Comment.deleteMany({})
    ]);
    createSeeds();
  }

  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
  server.on('error', console.error);
});
