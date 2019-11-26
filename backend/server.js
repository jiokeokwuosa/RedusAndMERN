import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import exerciseRoute from './routes/exercises.route';
import userRoute from './routes/users.route';

config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
//app.use('/exercises',exerciseRoute);
//app.use('/users',userRoute);

// Default Route
app.get('/', (req, res) =>
  res.status(200).json({
    status: 'Success',
    message: 'Welcome to the MEAN STACK App'
  })
);

const url = process.env.ATLAS_URL;
mongoose.connect(url, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('MongoDB database connected successfully');
});

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
})
