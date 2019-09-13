import Axios from 'axios';
import { item } from './view';


const config = {
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${process.env.SLACK_AUTH_TOKEN}`,
  },
};
const postMessageUrl = 'https://slack.com/api/chat.postMessage';

class Helper {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static postItem(submission) {
    const data = {
      channel: '#test',
      blocks: item(submission),
    };
    return Axios.post(postMessageUrl, data, config);
  }
}

export default Helper;
