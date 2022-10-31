const { SlashCommandBuilder } = require('discord.js');

//commends for the agent replies
module.exports = {
	data: new SlashCommandBuilder()
		.setName('commend')
		.setDescription('commend as your favorite agent')
		.addStringOption( option =>
					option.setName('agent')
						.setDescription('agent catalog')
						.setRequired(true)
						.addChoices(
							 {name: 'Sage', value: 'Wonderful'},
							 {name: 'Skye', value: 'Good On Ya'},
							 {name: 'Reyna', value: 'Impressive'},
							 {name: 'Killjoy', value: 'You Did Well'},
							 {name: 'Astra', value: 'Nice Nice'},
							 {name: 'Breach', value: 'Hell Of A Job'},
							 {name: 'Brimstone', value: 'GoodWork'},
							 {name: 'Chamber', value: 'Bravo'},
							 {name: 'Cypher', value: 'Well done'},
							 {name: 'Fade', value: 'Not Bad'},
							 {name: 'Jett', value: 'Good Work'},
							 {name: 'Kay/0', value: 'Solid Work'},
							 {name: 'Neon', value: 'Nice Job'},
							 {name: 'Omen', value: 'Well done'},
							 {name: 'Phoenix', value: 'Nice'},
							 {name: 'Raze', value: 'Hey Nice Work'},
							 {name: 'Sova', value: 'Good'},
							 {name: 'Viper', value: 'I am... Impressed'},
							 {name: 'Yoru', value: 'Not Bad'},
							 {name: 'Harbor', value: 'Hah, Well done'},
						))
		.addUserOption(option =>
					option.setName('user')
						.setDescription('selected user')
						.setRequired(false)
		),
	async execute(interaction) {
		//get the agent reply
		const agent = interaction.options.getString('agent');
		//get the person to react to
		const target = interaction.options.getUser('user');

		await interaction.reply(`${agent}` + target);
	}
};
