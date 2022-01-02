const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms');
const fs = require('fs');
const { prefix } = require('./config.json');
client.login(process.env.token)
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.queue = new Map();

["command"].forEach(handler => {
     require(`./handlers/${handler}`)(client);
});
const express = require("express");
const app = express();

app.listen(() => console.log("start profe"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

client.interaction = {}; 
const DiscordButtons = require('discord-buttons'); 
const ButtonPages = require('discord-button-pages');
DiscordButtons(client);

client.on('ready' , () => {
     client.user.setActivity('Ca Server | Ca Up ⬆')
})

client.on("message", async message => {
   

     if (message.author.bot) return;
     if (!message.guild) return;
     if (!message.content.startsWith(prefix)) return;
 
     // If message.member is uncached, cache it.
     if (!message.member) message.member = await message.guild.fetchMember(message);
 
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
     const cmd = args.shift().toLowerCase();
     
     if (cmd.length === 0) return;
     
     // Get the command
     let command = client.commands.get(cmd);
     // If none is found, try to find it by alias
     if (!command) command = client.commands.get(client.aliases.get(cmd));
 
     // If a command is finally found, run the command
     if (command) 
         command.run(client, message, args);
});

client.on('clickButton', (button) => {
    ButtonPages.buttonInteractions(button, client.interaction);
});
  
  client.on('message', msg => {
    if (msg.content.startsWith(`${prefix}help`)) {
        const embed1 = new Discord.MessageEmbed()
        .setAuthor(msg.author.username, msg.author.avatarURL())
        .setThumbnail(msg.author.avatarURL())
        .setTitle("Puplic Commands")
        .setColor("RED")
        .setDescription(`
        <${prefix}> invite | \`To make invite server link\`
        <${prefix}> G-password or pa | \`To make a password\`
        <${prefix}> Google or بحث | \`To search in the Google\`
        <${prefix}> ping | \`To see the connection speed\`
        <${prefix}> server | \`to see informations server\`
        <${prefix}> avatar | \`To see profile picture\`
        <${prefix}> server-a | \`To see server picture\`
        <${prefix}> tag | \`Use it to find out\`
        <${prefix}> timer | \`Timer reminding things you need\`
        <${prefix}> translate | \`To translate words in all languages ​​of the world\`
        <${prefix}> user | \`Show member information\`
        <${prefix}> slowmode | \`Temporary work in chat\`
        <${prefix}> short | \`To Short url\``)

        const embed2 = new Discord.MessageEmbed()
        .setAuthor(msg.author.username, msg.author.avatarURL())
        .setThumbnail(msg.author.avatarURL())
        .setTitle("Admin Commands")
        .setColor("BLUE")
        .setDescription(`
   <${prefix}> ban or باند| \`To ban the user off the server\`
   <${prefix}> unban | \`To unban a member\`
   <${prefix}> kick  or طرد | \`To kick the user off the server\`
   <${prefix}> clear  or مسح | \`to clear chat\`
   <${prefix}> lock or قفل | \`to lock chat\`
   <${prefix}> unlock or فتح| \`to unlock chat\`
   <${prefix}> hiden  or اخفاء | \`hide chat\`
   <${prefix}> unhiden or اظهار| \`unhide chat\`
   <${prefix}> mute or اسكت | \`Mute the user from writing\`
   <${prefix}> unmute or تكلم | \`Unmute the user from writing\`
   <${prefix}> prison or سجن | \`To give prison to the member\`
   <${prefix}> unprison or فك | \`To get the member out of prison\`
   <${prefix}> role-info | \`To display rank information\`
   <${prefix}> nick | \`To Change Name Member\`
   <${prefix}> reset | \`To return the user name\`
   <${prefix}> say | \`To make the bot write\`
   <${prefix}> vkick | \`Temporary work in chat\``)

        const embed3 = new Discord.MessageEmbed()
        .setAuthor(msg.author.username, msg.author.avatarURL())
        .setThumbnail(msg.author.avatarURL())
        .setTitle("Game Commands")
        .setDescription(`
 <${prefix}> cuttweet or cut or كت | \`Random questions\`
 <${prefix}> kill | \`to kill a member 😂\`
 <${prefix}> kiss | \`to kiss a member ♥\`
 <${prefix}> rps | \`to play with a bot Rock Paper Scissors\``)

      
      const embedPages = [embed1, embed2, embed3];
      ButtonPages.createPages(client.interaction, msg, embedPages, 60 * 1000, "red", "👉", "👈", "❌");
    }
});
 


client.on('message', message => {
    if(message.content.startsWith(`${prefix}avatar`)) {
      if (message.author.bot) return;
      const mention = message.mentions.users.first() || message.author;
      let profe = new Discord.MessageEmbed()
      .setTitle('Avatar Link')
      .setColor('RANDOM')
      .setURL(`${mention.avatarURL({dynamic:true , size: 1024})}`)
      .setAuthor(`${mention.username}#${mention.discriminator}`,`${mention.avatarURL({dynamic:true  , size: 1024})}`)
      .setImage(`${mention.avatarURL({dynamic:true , size: 1024})}`)
      .setFooter(`Requested By ${message.author.tag}`,`${message.author.avatarURL({dynamic:true , size: 1024})}`)
      message.channel.send(profe)
    }
  })
  
  client.on('message', message => {
    if(message.content.startsWith(`${prefix}server-a`)) {
      let embed = new Discord.MessageEmbed()
      embed.setAuthor(message.guild.name , message.guild.iconURL())
      embed.setFooter(`Requested by : ${message.author.tag}`)
      embed.setTitle("Avatar Link")
      embed.setURL(`${message.guild.iconURL({ dynamic: true, size: 1024 })})`)
      embed.setImage(message.guild.iconURL({ dynamic: true, size: 1024 }))
      embed.setColor("RANDOM")
    
      message.channel.send(embed)
    }
})

client.on('message', profe =>
{
  if(profe.content.startsWith("توثيق"))
  {
     if(profe.channel.id === '906543518657425488'){
          let member = profe.mentions.members.first() || profe.author;
    if(!profe.guild.me.hasPermission("MANAGE_ROLES")) return profe.channel.send(new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("I don't Have a Permission \`MANAGE_ROLES\`"))
    let role = profe.guild.roles.cache.get('874756641634025509');
    profe.author.send(new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setColor("RANDOM")
    .setDescription(`It has been successfully documented, Welcome to server ♥`))
    profe.delete({timeout:50})
    profe.member.roles.add(role)
     }
  }
})

client.on("message", message => {
     let fellchannel = 906390349700808735
   
     if(message.channel.id != fellchannel) return;
     if(message.author.id === client.user.id) return;
   
     if (message.author.send) {
       message.delete({timeout:50})
       const {MessageEmbed,MessageAttachment} = require('discord.js')
             let embed = new MessageEmbed()
             .setColor("#B9CFF0")
             .setDescription(`${message}`)
             .addField('By :',`<@${message.author.id}>`, true)
             .setAuthor(message.author.username , message.author.avatarURL())
             .setThumbnail(message.author.displayAvatarURL())
             message.channel.send(embed).then((m) => {
               m.react('<a:Z_Ca232:912337520321261589>')
               m.react('<a:Z_Ca231:912337484535455814>')
             })
     }
})

client.on('message', prof=>
{
    if(prof.author.bot)return;
    if(prof.channel.id === '874756642506436611')
    prof.react('<a:Z_Ca56:906670595138281502>')
});

client.on('message', prof=>
{
    if(prof.author.bot)return;
    if(prof.channel.id === '878851649437827132')
    prof.react('<a:Z_Ca56:906670595138281502>')
});

client.on('message', prof=>
{
    if(prof.author.bot)return;
    if(prof.channel.id === '878851649437827132')
    prof.react('<a:Z_Ca40:906285062817984562>')
});

client.on('message', prof=>
{
    if(prof.author.bot)return;
    if(prof.channel.id === '878851649437827132')
    prof.react('<a:Z_Ca45:906668932390334546>')
});

client.on('message', prof=>
{
    if(prof.author.bot)return;
    if(prof.channel.id === '874756642506436611')
    prof.react('<a:Z_Ca40:906285062817984562>')
});

client.on('message', prof=>
{
    if(prof.author.bot)return;
    if(prof.channel.id === '874756642506436611')
    prof.react('<a:Z_Ca45:906668932390334546>')
});

client.on('message', prof=>
{
    if(prof.author.bot)return;
    if(prof.channel.id === '906537988169814037')
    prof.react('https://cdn.discordapp.com/attachments/906537988169814037/927173279519735829/889548857652961330.gif')
});

