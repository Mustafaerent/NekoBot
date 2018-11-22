const Discord = require('discord.js');
const cevaplar = [
    "kesin",
    "hayır",
    "belki",
    "olabilir",
    "emin deyilim",
    "daha sonra tekrar sor",
    "kürem kırıldı dur",
    "mümkünatı yok",
    "imkansız",
    "kesninlikle",
    "Bu Soruyu Hiç Sevmedim.",
    "Beynim Yandı Dur.",
    "%99.9",
    "** Bu Sorunun Saten Cevabını Biliyorsun **",
    "evet",
    "herhalde",
    "küre bozuldu.",
];


exports.run = function(client, message, args) {
    var soru = args.join(' ');
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    if(!soru) return message.reply('Soru Sormayı Unuttun (Sihirli 8ball u Kızdırma).')
    else message.reply(cevap)
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['8b'], 
  permLevel: 0 
};

exports.help = {
  name: '8ball', 
  description: 'Sihirli 8ball a soru sor', 
  usage: '8ball <soru>' 
};