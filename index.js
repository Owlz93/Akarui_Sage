// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (message.content === 'I AM A MOUNTAIN') {
        message.channel.send('You were a boulder!');
    }
});

client.login(MTAzNDA0OTEzODg5NzIwNzI5Ng.GDnbji.aQ1Hdu_JfqABKzxB1GwjMen36rC_BArxo6fd2c);

