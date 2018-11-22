const Discord = require('discord.js');


exports.run = function(client, message, args) {
    const sayi = args.slice(0).join(' ');

    if(sayi.length < 1) {return message.reply('Silmem İçin Bir Miktar Girin.')
} else {
    message.channel.bulkDelete(sayi+1);
    message.channel.send("**" + sayi + "** Adet Mesaj Sildim").then(msg => {
        msg.delete("5000")
    })

}
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['temizle','clear'], 
  permLevel: 3 
};

exports.help = {
  name: 'temizle', 
  description: 'Beriltilen Miktarda Mesaj Siler.', 
  usage: 'temizle <miktar>'
};