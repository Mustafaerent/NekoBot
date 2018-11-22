const Discord = require('discord.js');


exports.run = function(client, message, args) {
    const mesaj = args.slice(0).join(' ')
    if(mesaj < 1) {
        message.reply("Duyuru Belirt")
    } else {
        message.guild.channels.find('name', 'duyuru').send(mesaj)
    }
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['duyuru','d'], 
  permLevel: 3 
};

exports.help = {
  name: 'duyuru', 
  description: 'Yazdığınız Yazıyı Duyuru Kanalına Duyuru Olarak Yazar.', 
  usage: 'duyuru <yazi> '
};