import mongoose from 'mongoose';
import app from './app.js';

let server;
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Database Connected');
  server = app.listen(process.env.PORT, () => {
    console.log('Running On Port : ', process.env.PORT);
  });
});
