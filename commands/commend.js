const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('commend')
		.setDescription('commend as your favorite agent'),
	async execute(interaction) {
		await interaction.reply('You were a boulder!');
	}
};
