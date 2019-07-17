const twit = require('twit');
const emoji = require('node-emoji');
const auth = require('../../config/auth');
const twitter = new twit({consumer_key: auth.twitter.CONSUMER_KEY, consumer_secret: auth.twitter.CONSUMER_SECRET, access_token: auth.twitter.ACCESS_TOKEN, access_token_secret: auth.twitter.ACCESS_TOKEN_SECRET});
const places = require('google-places-web').default; 

places.apiKey = auth.places.PLACES_TOKEN;
places.debug = false;

var stream = twitter.stream('statuses/filter', { track: '@tearboty' });

stream.on('tweet', (tweet) => {
    const args = tweet.text.slice(0).trim().split(' ');
    const place = args[args.length - 1];
    const location = tweet.text.replace('@tearboty', '').replace(place, '').trim();
    const emojiKey = emoji.find(place); 
    const query = `${emojiKey ? emojiKey.key : place}, ${location || tweet.user.location}`;

    places.textsearch({ query: query, language: 'en' }).then((response) => {
        let message = '';
        for(let i = 0; i < response.length; i++){
            message += `✏️ Name: ${response[i].name}\n⭐️ Rating: ${response[i].rating}\n🏠 Address: ${response[i].formatted_address}\n\n`;
        }
        
        sendDirectMessage(tweet.user.id_str, message);
    }).catch((error) => {
        sendDirectMessage(tweet.user.id_str, 'Sorry, i did not find anything ☹️');
    });
});

sendDirectMessage = (user_id, message) => {
    return new Promise((resolve, reject) => {
        twitter.post('direct_messages/events/new', {
            event: {
                'type': 'message_create',
                'message_create': {
                    'target': {
                        'recipient_id': user_id
                    },
                    'message_data': {
                        'text': message,
                    }
                }
            }
        }).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error.message);
        });
    });
}