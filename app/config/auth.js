const twitter = {
  CONSUMER_KEY: '' || process.env.CONSUMER_KEY,
  CONSUMER_SECRET: '' || process.env.CONSUMER_SECRET,
  ACCESS_TOKEN: '' || process.env.ACCESS_TOKEN,
  ACCESS_TOKEN_SECRET: '' || process.env.ACCESS_TOKEN_SECRET
}

const places = {
  PLACES_TOKEN: '' || process.env.PLACES_TOKEN,
}

module.exports = {
  twitter: twitter,
  places: places
}