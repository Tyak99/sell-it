const welcome = name => [
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: `Hi ${name} :wave: Welcome to sell-it!!`,
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
// const welcome = [
//   {
//     type: 'section',
//     text: {
//       type: 'mrkdwn',
//       text: 'Hi David :wave: Welcome to sell-it!!',
//     },
//   },
//   {
//     type: 'section',
//     text: {
//       type: 'mrkdwn',
//       text: 'What do you want to do?',
//     },
//   },
//   {
//     type: 'actions',
//     elements: [
//       {
//         type: 'button',
//         text: {
//           type: 'plain_text',
//           text: 'Post Item',
//           emoji: true,
//         },
//       },
//       {
//         type: 'button',
//         text: {
//           type: 'plain_text',
//           text: 'View Items',
//           emoji: true,
//         },
//       },
//     ],
//   },
// ];

const select = {
  label: 'Negotiable?',
  type: 'select',
  name: 'negotiation',
  value: 'No',
  optional: true,
  options: [
    {
      label: 'Yes',
      value: 'Yes',
    },
    {
      label: 'No',
      value: 'No',
    },
  ],
};

const dialog = [
  {
    type: 'text',
    label: 'Title',
    name: 'item_title',
    placeholder: 'Title',
  },
  {
    type: 'text',
    label: 'Price',
    name: 'item_price',
    placeholder: 'Price',
  },
  select,
  {
    label: 'Additional information',
    name: 'comment',
    optional: true,
    type: 'textarea',
    hint: 'Provide additional information if needed.',
  },
];

module.exports = {
  welcome,
  dialog,
};
