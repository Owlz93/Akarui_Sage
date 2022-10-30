const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reactionrole')
		.setDescription('Sets a reaction role'),
  async execute(message, args, Discord, client) {
    const channel = '1036302764965363773';
    const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "EYO");
    const blueTeamRole = message.guild.roles.cache.find(role => role.name === "Sus");

    const eyoTeamEmoji = ':eyes:';
    const susTeamEmoji = ':face_with_raised_eyebrow:';

    const embed = new EmbedBuilder()
        .setColor('#e42643')
        .setTitle('Choose a team to play on!')
        .setDescription('Choosing a team will allow you to interact with your teammates!\n\n'
            + `${eyoTeamEmoji} for EYO team\n`
            + `${susTeamEmoji} for Sus team`);

            channel.send({ embeds: [embed] });
    messageEmbed.react(eyoTeamEmoji);
    messageEmbed.react(susTeamEmoji);

    client.on('messageReactionAdd', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name === eyoTeamEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(eyoTeamRole);
            }
            if (reaction.emoji.name === susTeamEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(susTeamRole);
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
            if (reaction.emoji.name === eyoTeamEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(eyoTeamRole);
            }
            if (reaction.emoji.name === susTeamEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(susTeamRole);
            }
        } else {
            return;
        }
    });
  }

}
