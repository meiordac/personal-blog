/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

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

// use all api routes
app.use('/api/posts', routes.post);
app.use('/api/users', routes.user);
app.use('/api/comments', routes.comment);
app.use('/api/authenticate', routes.authentication);

const port = process.env.port || 3333;

connectDb().then(async () => {
  await eraseDataBaseOnSync();

  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
  server.on('error', console.error);
});

async function eraseDataBaseOnSync() {
  if (environment.eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Post.deleteMany({}),
      models.Comment.deleteMany({})
    ]);
    createSeeds();
  }
}
