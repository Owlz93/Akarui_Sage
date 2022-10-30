const { SlashCommandBuilder } = require('discord.js');


//Commend options for all agents

/*
Astra: Nice Nice
Breach: Hell Of A Job
Brimstone: GoodWork
Chamber: Bravo
Cypher: Well done
Fade: Not Bad
Jett: GoodWork
Kay0: SolidWork
KillJoy: You Did Well
Neon: Nice Job
Omen: Well done
Phoenix: Nice
Raze: Hey Nice Work
Reyna: Impressive
Sage: Wonderful
Skye: GoodOnYa
Sova: Good
Viper: I'm... Impressed
Yoru: Not Bad
Harbor: Hah, Well done
*/


module.exports = {
	data: new SlashCommandBuilder()
		.setName('commend')
		.setDescription('commend as your favorite agent'),
	async execute(interaction) {
		await interaction.reply('You were a boulder!');
	}
};
