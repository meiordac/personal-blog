import * as mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  id: Number,
  published_at: { type: Date, default: Date.now },
  upvotes: Number,
  downvotes: Number,
  author: String,
  id_post: Number
  // author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
});
const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
