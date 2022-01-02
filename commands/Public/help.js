/*
const Discord = require('discord.js')
const ButtonPages = require('discord-button-pages');
const { prefix } = require('../../bot.json')
module.exports = {
     name: "help",
     category: "Public",
     aliases: ["مساعدة"],
     usage: "<prefix>help",
     description: "help command",
     cooldown: 5,
     run: async (client, message, args) => {
          const embed1 = new Discord.MessageEmbed()
          .setTitle("Puplic Commands")
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
          .setTitle("Admin Commands")
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
          .setTitle("Game Commands")
          .setDescription(`
   <${prefix}> cuttweet or cut or كت | \`Random questions\`
   <${prefix}> kill | \`to kill a member 😂\`
   <${prefix}> kiss | \`to kiss a member ♥\`
   <${prefix}> rps | \`to play with a bot Rock Paper Scissors\``)

          const embedPages = [embed1, embed2, embed3]
          ButtonPages.createPages(client, message, embedPages, 60 * 1000, "green", "👉", "👈", "❌");
     },
};
*/