import { Schema, Document, model } from 'mongoose';
import * as bcrypt from 'bcrypt';

export interface IUser extends Document {
  id: number;
  email: string;
  password: string;
  password_confirmation: string;
  name: string;
  avatar: string;
}

const userSchema = new Schema({
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

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.hash(user['password'], 10).then(hashedPassword => {
    user['password'] = hashedPassword;
    next();
  });
});

const User = model<IUser>('User', userSchema);
export default User;
