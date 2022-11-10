const index = require("../index.js");
//const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	name:'mountain'
	//data: new SlashCommandBuilder()
		//.setName('mountain')
	//	.setDescription('replies with Boulder!'),
	async execute(interaction) {
		await interaction.reply('You were a boulder!');
	}
};
