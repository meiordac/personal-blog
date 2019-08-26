import * as mongoose from 'mongoose';
import User from './user';
import Post from './post';
import Comment from './comment';

const connectDb = () => {
  return mongoose.connect(
    process.env.DATABASE_URL || 'mongodb://localhost:27017/blog',
    { useNewUrlParser: true }
  );
};
const models = { User, Comment, Post };
export { connectDb };
export default models;
