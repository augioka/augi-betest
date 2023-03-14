import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const userSchema = mongoose.Schema({
  userId: {
    type: String,
    unique: true,
    default: uuidv4(),
  },
  fullName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  registrationNumber: {
    type: String,
    required: true,
  },
});

userSchema.index({ userId: 1 });
const User = mongoose.model('User', userSchema);

export default User;
