const twitter = {
  track: process.env.TWITTER_TRACK || '@tearboty',
  consumer_key: process.env.TWITTER_API_KEY || '',
  consumer_secret: process.env.TWITTER_API_KEY_SECRET || '',
  access_token: process.env.TWITTER_ACCESS_TOKEN || '',
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || '',
  username: process.env.TWITTER_USERNAME || '',
};

module.exports = twitter;
