import { Router } from 'express';
import models from '../../models';

const router = Router();

router.get('/', async (req, res) => {
  const comments = await models.Comment.find().exec();
  res.send(comments);
});

router.post('/', async (req, rest) => {
  const comment = await new models.Comment(req.body).save();
  rest.send(comment);
});

export default router;
