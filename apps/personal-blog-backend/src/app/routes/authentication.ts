import { Router } from 'express';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

import models from '../models';

const router = Router();

router.post('/', async (req, rest, next) => {
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

export default router;
