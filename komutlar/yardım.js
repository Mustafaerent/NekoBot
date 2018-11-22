const Discord = require('discord.js');


exports.run = function(client, message) {
    message.channel.send(
      '``` \n  Komutlarımız Şu Anda Azdır. Ama Her Geçen Gün Daha Çok Komut Eklenecektir. \n \n Komutlar \n \n 8ball (8b) = !8ball <soru> Şeklinde Kullanılır.Soruya Cevap Verir. \n \n ban = !ban <@kişi> Şeklinde Kullanılır. Serverdan Birini Banlar. \n \n botyazarı = !bs Şeklinde Kullanılır.Botu Kimin Yazdığını Gösterir. \n \n duyuru = !duyuru <mesaj> Şeklinde Kullanılır. Duyuru Yapmanızı Sağlar. \n \n kick = !kick <@kişi> Şeklinde Kullanılır. Serverdan Birini Tekmeler. \n \n ping = !ping Şeklinde Kullanılır. Botun Pingini Gösterir. \n \n temizle = !temizle <sayi> Şeklinde Kullanılır. Yazılan Sayı Kadar Mesaj Siler. \n \n yazıtura = !yt Şeklinde Kullanılır. Yazı Tura Atar. \n \n rolver = rolver <@Kişi> <roladı> Şeklinde Kullanılır. \n \n rolsil = rolsil <@Kişi> <roladı> Şeklinde Kullanılır. \n \n Daha Fazlası İçin Discord Sunucumuz : https://discord.gg/ZebhHJj```'   
    );
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['yardım','help'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım', 
  description: 'Komutlar Gösterir.', 
  usage: 'yardım' 
};