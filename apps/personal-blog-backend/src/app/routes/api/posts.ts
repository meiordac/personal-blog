import { Router } from 'express';
import models from '../../models';

const router = Router();

router.get('/', async (req, res) => {
  const posts = await models.Post.find()
    .populate('author')
    .exec();

  res.send(posts);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newPost = await new models.Post(body).save();
  const post = await models.Post.findById(newPost.id)
    .populate('author')
    .exec();

  res.send(post);
});

router.get('/:id', async (req, res) => {
  const post = await models.Post.findById(req.params.id)
    .populate('author')
    .exec();
  console.log('Request Id:', req.params.id);
  res.send(post);
});

export default router;
