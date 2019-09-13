import express from 'express';
import 'dotenv/config';
import axios from 'axios';
import bodyParser from 'body-parser';
import { welcome, dialog } from './view';
import { capitalize } from './helpers';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const config = {
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${process.env.SLACK_AUTH_TOKEN}`,
  },
};

app.get('/', (req, res) => {
  res.send('welcome to sell-it');
});

app.post('/', (req, res) => {
  const name = capitalize((req.body.user_name).split('.')[0]);
  res.json({
    status: 200,
    blocks: welcome(name),
  });
});

app.post('/dial', (req, res) => {
  const callbackId = JSON.parse(req.body.payload).callback_id;
  const responseUrl = JSON.parse(req.body.payload).response_url;

  if (callbackId === 'ryde-46e2b0') {
    res.send('');
    const reply = {
      text: 'Posting your item... :rocket:',
      response_type: 'ephemeral',
    };
    return axios.post(responseUrl, reply, config);
  }

  const data = {
    trigger_id: JSON.parse(req.body.payload).trigger_id,
    dialog: {
      callback_id: 'ryde-46e2b0',
      title: 'Post item?',
      submit_label: 'Sell',
      state: 'postItem',
      elements: dialog,
    },
  };

  axios.post('https://slack.com/api/dialog.open', data, config)
    .then(() => {
      res.json({ status: 200 });
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('server started');
});
