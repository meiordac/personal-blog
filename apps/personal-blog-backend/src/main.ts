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
import routes from './app/routes';

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// allow cors
app.use(cors());

app.use('/api/posts', routes.post);
app.use('/api/users', routes.user);
app.use('/api/comments', routes.comment);

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
