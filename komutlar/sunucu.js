const Discord = require('discord.js');


exports.run = function(client, message) {
    message.reply('\n \n \n https://discord.gg/Zau6Xs')
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardımsunucu', 
  description: 'yardımsunucu', 
  usage: 'yardımsunucu' 
};