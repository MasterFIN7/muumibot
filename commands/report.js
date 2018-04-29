const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("En löydä käyttäjää!");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#ffffff")
  .addField("Ilmiannettu käyttäjä", `${rUser} ID: ${rUser.id}`)
  .addField("Ilmiantaja", `${message.author} with ID: ${message.author.id}`)
  .addField("Kanava", message.channel)
  .addField("Aika", message.createdAt)
  .addField("Syy", reason);


  let reportschannel = message.guild.channels.find(`name`, "reports");
  if(!reportschannel) return message.channel.send("En löydä kanavaa!");


  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);
}

module.exports.help = {
  name: "report"
}
