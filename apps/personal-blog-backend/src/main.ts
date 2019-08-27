/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

import models, { connectDb } from './app/models';

import { createSeeds } from './app/db/seed';
import { environment } from './environments/environment';

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// allow cors
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

app.post('/api/users', async (req, rest) => {
  const body = req.body;
  const user = await new models.User(body).save();
  rest.send(user);
});

app.post('/api/authenticate', async (req, rest, next) => {
  const body = req.body;
  models.User.findOne({ email: body.email }, (err, user) => {
    if (err) {
      next(err);
    } else {
      bcrypt.compare(body.password, user.password, function(passErr, isMatch) {
        if (passErr) return next(passErr);
        const token = jwt.sign({ email: user.email }, 'shhhhh');
        rest.send({
          _id: user._id,
          email: user.email,
          auth_token: token,
          avatar: user.avatar,
          name: user.name || user.email
        });
      });
    }
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
