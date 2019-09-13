import express from 'express';
import 'dotenv/config';
import { welcome } from './view';


const app = express();

app.get('/', (req, res) => {
  res.send('welcome to sell-it');
});

app.post('/', (req, res) => {
  res.json({
    status: 200,
    blocks: welcome,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('server started');
});
