const Discord = require('discord.js');
const { prefix } = require('config')
module.exports = {
	name: 'supportus',
    description: 'Find out ways to support us.',
    usage: '',
    aliases: [ 'donate' ],
    guildonly: false,
    devonly: false,
    args: false,
    modCommand: false,
    category: 'Vanced',
	execute(message, args) {
        const output = new Discord.RichEmbed()
        .setColor('e5460e')
        .addField('Nitro Boost', 
                  `If you own a [Discord Nitro Subscription](https://discordapp.com/nitro), you can boost our Server, which will give us Perks like a custom invite link [(discord.gg/vanced)](https://discord.gg/vanced), a custom server banner, more emotes etc.\nYou yourself will also get some Perks: Boosters get access to the latest Beta Version and can use the \`${prefix}colorme\` command, to select a custom role.`,
                  false)
        .addField('Brave Referral Link', 
                  'If you are planning to download Brave Browser, [do it via our referral link](https://vanced.app/brave).',
                  false)
        .addField('Do not ask unnecessary questions',
                  `Before asking for support or reporting a bug, please see if your problem has a solution on our bot (${prefix}help) and use the discord search tool.\nThis way, 95% of the problems can be solved without us having to waste time on explaining the same thing over and over.`,
                  false)
        .addField('Be a nice member of our community',
                  'If you like what we are doing, consider hanging out on our Discord or Telegram, chatting with other users, helping users with vanced issues, etc.', 
                  false)
        .setThumbnail('https://i.imgur.com/mFkZnUB.png')
        .setTitle('How to support us')
        .setDescription("Vanced does not take donations! This means, that any donation links you might find are fake!\n\nAs mentioned above, Vanced does not take donations, but there's other way to support us, that you can find below.")
        .setTimestamp()

        return message.channel.send(output)
    },
};