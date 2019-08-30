import * as mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  id: Number,
  title: String,
  content: String,
  image: String,
  published_at: { type: Date, default: Date.now },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
const Post = mongoose.model('Post', postSchema);
export default Post;
