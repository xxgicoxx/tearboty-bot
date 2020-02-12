const twitter = {
  consumer_key: process.env.TEARBOTY_TWITTER_CONSUMER_KEY || '',
  consumer_secret: process.env.TEARBOTY_TWITTER_CONSUMER_SECRET || '',
  access_token: process.env.TEARBOTY_TWITTER_ACCESS_TOKEN || '',
  access_token_secret: process.env.TEARBOTY_TWITTER_ACCESS_TOKEN_SECRET || '',
};

module.exports = twitter;
