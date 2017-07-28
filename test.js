
var Twitter = require("twitter");
var five = require("johnny-five");

var client = new Twitter({
    consumer_key: 'v4uj4gT3zR0TRPbeD0UgKr5Dq',
    consumer_secret: 'HeylVkuJrIZ6IVLKqkrgX1D7qryTC9t0PEwMQ4KF8tbIyQOfKx',
    access_token_key: '731993539035467776-3kFaLXLOhRn9z1yd0TDgfWzXOOQ1rpO',
    access_token_secret: 'WQz5dXLtS6Pjtm0W3f2IQMHYwlVA0y7DZDQXPATfhM78v'
});


var board = new five.Board();
board.on("ready", function () {
    var led = new five.Led(12);
    var ledState = 0;
    setInterval(lastTweet, 3000, function (tweets) {
        var tweetText = tweets[0].text;
        if (tweetText === 'off') {
            led.off();
        } else if (tweetText === 'on') {
            led.on();
            console.log('led on')
        }
    });

    setInterval(lastMention, 12500, function (mentions) {
        // console.log(mentions);
        var mentionText = mentions[0].text.slice(9);
        console.log(mentionText);
        if (mentionText === 'off') {
            led.off();
        } else if (mentionText === 'on') {
            led.on();
        }
    });
});

function lastTweet(callback) {
    client.get('statuses/user_timeline', { q: 'crabarc', screen_name: 'crabarc' }, function (error, tweets, response) {
        if (error) throw error;
        callback(tweets)
    });
};

function lastMention(callback) {
    client.get('statuses/mentions_timeline', { q: 'crabarc', screen_name: 'crabarc' }, function (error, mentions, response) {
        if (error) throw error;
        callback(mentions)
    });
};
