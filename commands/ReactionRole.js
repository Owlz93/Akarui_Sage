const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reactionrole')
		.setDescription('Sets a reaction role'),
  async execute(message, args, Discord, client) {
    const channel = '1036302764965363773';
    const eyeTeamRole = message.guild.roles.cache.find(role => role.name === "Eyes");
    const browTeamRole = message.guild.roles.cache.find(role => role.name === "Eyebrow");

    const eyeTeamEmoji = '👀';
    const browTeamEmoji = '🤨';

    const embedExample = new EmbedBuilder()
        .setColor('#e42643')
        .setTitle('Choose a team to play on!')
        .setDescription('Choosing a team will allow you to interact with your teammates!\n\n'
            + `${eyeTeamEmoji} for Eyes team\n`
            + `${browTeamEmoji} for Eyebrow team`);

    let messageEmbed = await message.channel.send({embeds: [embedExample] })
		messageEmbed.react(eyeTeamEmoji);
		messageEmbed.react(browTeamEmoji);


		/*.then(embedMessage => {
    embedMessage.react(eyeTeamEmoji)}).then(embedMessage => {
    embedMessage.react(browTeamEmoji)
	});


		message.react('eyeTeamEmoji')
				.then(() => message.react('browTeamEmoji'))
				.catch(error => console.error('One of the emojis failed to react', error));
*/

    //messageEmbed.react(eyeTeamEmoji);
    //messageEmbed.react(browTeamEmoji);



    client.on('messageReactionAdd', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name === eyeTeamEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(eyeTeamRole);
            }
            if (reaction.emoji.name === browTeamEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(browTeamRole);
            }
        } else {
            return;
        }

    });

    client.on('messageReactionRemove', async (reaction, user) => {

        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;


        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name === eyeTeamEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(eyeTeamRole);
            }
            if (reaction.emoji.name === browTeamEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(browTeamRole);
            }
        } else {
            return;
        }
    });



  }

}
