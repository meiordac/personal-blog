import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: Number,
  email: {
    type: String,
    unique: true
  },
  password: String,
  password_confirmation: String,
  name: String,
  avatar: String
});
const User = mongoose.model('User', userSchema);
export default User;
