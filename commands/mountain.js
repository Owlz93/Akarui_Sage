const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mountain')
		.setDescription('replies with Boulder!'),
	async execute(interaction) {
		await interaction.reply('You were a boulder!');
	}
};
