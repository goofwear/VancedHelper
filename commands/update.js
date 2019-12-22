const Discord = require('discord.js');
module.exports = {
	name: 'update',
    description: 'Will there ever be an update? Why has it been so long?',
    aliases: ['newversion', 'dead', 'u'],
    usage: ' ',
	execute(message, args) {
        const output = new Discord.RichEmbed()
        .setColor('e5460e')
        .addField('Issues', 'There\'s tons of issues that are tough to fix with the latest versions. Tons of crashes, incompatibilities, weird apk behavior, removal of ExoPlayer V2 and many more.', false)
        .addField('Motivation', 'Vanced is just a hobby, not a job. This means that updates only come when the dev is motivated.', false)
        .addField('The current version is just fine', 'There is no issues that aren\'t fixable. Additionally, the new youtube version has no new feature that would provide a good reason to even update.', false)
        //.setThumbnail('')
        .setTitle('Update when????')
        .setDescription('~~Everytime someone asks, you gotta wait one extra day until the next update comes out. We reached 169 extra days now.~~\n\nJokes aside, there\'s many reasons for there not to be an update. If you can\'t deal with it, this is not the mod for you.\nYou can find some reasons below, but please stop asking about an update.')
        .setTimestamp()
        return message.channel.send(output)
    },
};