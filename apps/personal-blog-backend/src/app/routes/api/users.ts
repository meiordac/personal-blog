import { Router } from 'express';
import models from '../../models';

const router = Router();

router.post('/', async (req, rest, next) => {
  const body = req.body;
  const user = await new models.User(body).save();
  if (user) {
    rest.send(user);
  } else {
    next('Error creating user');
  }
});

export default router;
