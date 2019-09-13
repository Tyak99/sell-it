import express from 'express';
import 'dotenv/config';


const app = express();

app.get('/', (req, res) => {
  res.send('welcome');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('server started');
});
