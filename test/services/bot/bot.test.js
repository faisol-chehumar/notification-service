import * as line from '@line/bot-sdk';

import bot from '../../../services/bot';

describe('create() is command for create bot client with init config.', () => {
  it('should be return bot instance depend on config.', () => {
    const config = {
      TS_SUPPORT: {
        channelAccessToken: 'hQXum+1h5'
      },
      TS_OA: {
        channelAccessToken: '3+k5qhGCh'
      }
    };

    const createBot = bot.create({
      service: line,
      channel: 'TS_OA',
      config
    });

    expect(createBot).toMatchObject({
      config: {
        channelAccessToken: config.TS_OA.channelAccessToken
      }
    });
  });
});

describe('multicast() is commands bot for send message to multiple specific users.', () => {
  const mockClient = {
    multicast: () => {
      return {
        status: 'success',
        result: {}
      };
    }
  };

  it('should return {status: success, result: {}} when successful send message to users.', async () => {
    const params = {
      userIds: ['1', '2', '3'],
      messages: [
        {
          type: 'text',
          text: 'Hello World'
        }
      ]
    };

    const greeting = await bot.multicast(mockClient, params);
    const expected = {
      status: 'success',
      result: {}
    };

    expect(greeting).toEqual(expected);
  });

  it('should throw Error if userIds is an empty array. because multicast must have userIds atleast 1 Id.', () => {
    const params = {
      userIds: [],
      messages: [
        {
          type: 'text',
          text: 'Hello World'
        }
      ]
    };

    const errorMessage = 'userIds must not be empty array';

    expect(() => {
      bot.multicast(mockClient, params);
    }).toThrow(errorMessage);
  });

  it('should throw Error if messages is an empty array. because multicast must have messages atleast 1 object.', () => {
    const params = {
      userIds: ['1', '2', '3'],
      messages: []
    };

    const errorMessage = 'messages must not be empty array';

    expect(() => {
      bot.multicast(mockClient, params);
    }).toThrow(errorMessage);
  });
});
