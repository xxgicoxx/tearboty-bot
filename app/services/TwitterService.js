class TwitterService {
  direct(twitter, user, text) {
    twitter.post('direct_messages/events/new', {
      event: {
        type: 'message_create',
        message_create: {
          target: {
            recipient_id: user,
          },
          message_data: {
            text,
          },
        },
      },
    });
  }
}

module.exports = TwitterService;
