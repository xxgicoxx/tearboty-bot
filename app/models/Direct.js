const { constants } = require('../utils');

class Direct {
  constructor({ user, text }) {
    this.user = user;
    this.text = text;
  }

  toJson() {
    return {
      event: {
        type: constants.TYPE,
        message_create: {
          target: {
            recipient_id: this.user,
          },
          message_data: {
            text: this.text || constants.MESSAGE_NOT_FOUND,
          },
        },
      },
    };
  }
}

module.exports = Direct;
