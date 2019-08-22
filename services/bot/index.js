const create = ({ service, channel, config }) => {
  return new service.Client({
    channelAccessToken: config[channel].channelAccessToken
  });
};

const multicast = (
  client,
  {
    userIds = [],
    messages = [
      {
        type: '',
        text: ''
      }
    ]
  }
) => {
  if (userIds.length <= 0) {
    throw new Error('userIds must not be empty array');
  }

  if (messages.length <= 0) {
    throw new Error('messages must not be empty array');
  }

  return client.multicast(userIds, messages);
};

export default {
  create,
  multicast
};
