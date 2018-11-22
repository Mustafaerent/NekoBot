const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();


exports.run = function(client, message) {
    const embed = new Discord.RichEmbed()
    .setColor(0xf4b942)
    .setDescription("**" + chance.pickone(["YAZI-TURA:__YAZI__**", "YAZI-TURA:__TURA__**"]));
    message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['yt'], 
  permLevel: 0 
};

exports.help = {
  name: 'yazıtura', 
  description: 'Yazı Tura Atar.', 
  usage: 'yazıtura' 
};