const Discord = require('discord.js');


exports.run = function(client, message, args) {
    var durum = args.slice(0).join(' ')
    client.user.setStatus(durum);
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['duay','durumayarla'], 
  permLevel: 4 
};

exports.help = {
  name: 'setstatus', 
  description: 'Durum Ayarlar', 
  usage: 'setstatus' 
};