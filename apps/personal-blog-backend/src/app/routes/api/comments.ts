import { Router } from 'express';
import models from '../../models';

const router = Router();

router.get('/', async (req, res) => {
  const comments = await models.Comment.find()
    .populate('post')
    .exec();
  res.send(comments);
});

router.post('/', async (req, rest) => {
  const newComment = await new models.Comment(req.body).save();
  const comment = await models.Comment.findById(newComment.id)
    .populate('post')
    .exec();
  rest.send(comment);
});

export default router;
