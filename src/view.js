const welcome = [
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: 'Hi David :wave: Welcome to sell-it!!',
    },
  },
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: 'What do you want to do?',
    },
  },
  {
    type: 'actions',
    elements: [
      {
        type: 'button',
        text: {
          type: 'plain_text',
          text: 'Post Item',
          emoji: true,
        },
      },
      {
        type: 'button',
        text: {
          type: 'plain_text',
          text: 'View Items',
          emoji: true,
        },
      },
    ],
  },
];

module.exports = {
  welcome,
};
