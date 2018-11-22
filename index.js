const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const chalk = require('chalk');
const moment = require('moment');
require('./util/eventLoader')(client);
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};
const ayarlar = ('./ayarlar');

client.on('ready', () => {
  console.log('Açıldım');
}
);

//bot.on('', '' => {});

client.on('guildMemberAdd', member => {
  console.log(member.user.username + 'Kişisi Servera Katıldı.')
  var role = member.guild.roles.find('name', 'Kayıt');
  if(!role) return;
  member.addRole(role)
});

client.on('message',msg => {
  if(msg.content === 'sa'){
    msg.reply("as");
  }
});

client.on('message',msg => {
  if(msg.content === 'Sa'){
    msg.reply("as");
  }
});

client.on('message',msg => {
  if(msg.content === 'SA'){
    msg.reply("as");
  }
});

client.on('message',msg => {
  if(msg.content === 'Selam'){
    msg.reply("Meow!!");
  }
});

client.on('message',msg => {
  if(msg.content === 'selam'){
    msg.reply("Meow!!");
  }
});

client.on('message',msg => {
  if(msg.content === 'SELAM'){
    msg.reply("Meow!!");
  }
});

let prefix = '!'

client.on('message',msg => {
  if(msg.content.startsWith(prefix + 'setstatus')) {
    bot.user.setStatus('online')
  }
});

client.on('guildBanAdd', (guild, user) => {
  console.log(user.username + guild.name + 'servarından Banlandı.');
  let modLog = guild.channels.find('name', 'mod-log');
  if(!modLog) return; message.channel.send ('Lütfen mod-log Kanalı Kurun.')
  modLog.send(' `Bir Kullanıcı Admin Tarafından Banlandı` @here ')
});

client.on('guildBanRemove', (guild, user) => {
  console.log(user.username + guild.name + 'servarındaki Banı Kaldırıldı.');
  let modLog = guild.channels.find('name', 'mod-log');
  if(!modLog) return; message.channel.send ('Lütfen mod-log Kanalı Kurun.')
  modLog.send(' `Banlanmış Bir Kullanıcının Banı Admin Tarafından Kaldırıldı` @here ')
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.on('message',message => {
    if (message.content.startsWith("!ban")) {
      let member= message.mentions.members.first();
      member.ban().then((member) => {
          message.channel.send(":wave: " + member.displayName + " Kişisi " + message.author + " Tarafından Başarıyla Banlandı. :point_right: ");
      }).catch(() => {
          message.channel.send("Banlama Başarısız (Yetki Ver Bana)");
      });
    }
});

client.on('message',message => {
  if (message.content.startsWith("!kick")) {
    let member= message.mentions.members.first();
    member.kick().then((member) => {
        message.channel.send(":wave: " + member.displayName + " Kişisi " + message.author + " Tarafından Tekmelendi. :point_right: ");
    }).catch(() => {
        message.channel.send("Tekmeleme Başarısız (Yetki Ver Bana)");
      });
    }
});

  
client.login('NTEyOTk5MzkxODk3MDU5MzUw.DtLKwQ.6pEEQhdUgHsB_ixq5ovkkNaHuZA');
