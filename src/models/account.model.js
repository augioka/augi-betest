import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const accountSchema = mongoose.Schema({
  accountId: {
    type: String,
    immutable: true,
    unique: true,
    default: uuidv4(),
  },
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  lastLoginDateTime: {
    type: Date,
    default: Date.now(),
  },
  userId: {
    type: String,
    unique: true,
    immutable: true,
    ref: 'User',
    required: true,
  },
});

accountSchema.index({ accountId: 1 });

const Account = mongoose.model('Account', accountSchema);

export default Account;
