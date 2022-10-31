// Require the necessary discord.js classes
const { Client, Collection, Events, GatewayIntentBits, Partials } = require('discord.js');
const { token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds], partials: ["MESSAGE", "CHANNEL", "REACTION"] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready to gooo! Logged in as ${c.user.tag}`);
});

/*-----listen to commands-----*/
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

client.once(Events.ClientReady, () => {
	console.log('Ready to listen to commands!');
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});


// Setting up reaction role command

/*client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }

});
*/

/*----------*/

// Log in to Discord with your client's token
client.login(token);


//This is a test
