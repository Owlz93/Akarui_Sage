// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.login(config.BOT_TOKEN);

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (message.content === 'I AM A MOUNTAIN') {
        message.channel.send('You were a boulder!');
    }
});


