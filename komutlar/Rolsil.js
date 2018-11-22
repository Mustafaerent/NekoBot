const Discord = require('discord.js');


exports.run = function(client, message, args, guild) { 
  if(!message.member.hasPermission("MANAGE_MEMBERS ")) return message.reply('Bu Yetkiye Sahip Deyilsin.')
   let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(atgs[0]);
   if(!rMember) return message.reply('Öyle Bir Üye Bulunamadı.');
   let role = args.join(' ').slice(22);
   if(!role) return message.reply('Lütfen Bir Rol Belirtin.');
   let gRol = message.guild.roles.find(`name`, role)
   if(!gRol) return message.reply('Öyle Bir Rol Bulunamadı.')

   if(!rMember.roles.has(gRol.id));
    (rMember.removeRole(gRol.id));

   try{
     rMember.send(gRol.name + ' ```Bu Rolü```' + message.author + '```Kişisi Geri Aldı.```')
   }catch(e) {
     message.channel.send('Birşeyler Birşeyler Birşeyler')
   }
  };

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['rolsil','removerole'], 
  permLevel: 3 
};

exports.help = {
  name: 'rolsil', 
  description: 'Rol Siler', 
  usage: 'rolsil <@rolverilecek kişi> <roladı>' 
};