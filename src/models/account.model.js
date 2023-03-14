import mongoose from 'mongoose';

const accountSchema = mongoose.Schema({
  accountId: {
    type: String,
    unique: true,
    default: uuidv4(),
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  lastLoginDateTime: {
    type: Date,
  },
  userId: {
    type: String,
    ref: 'User',
    required: true,
  },
});

accountSchema.index({ accountId: 1 });

const Account = mongoose.model('Account', accountSchema);

export default Account;
