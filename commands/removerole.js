const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Ei.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("En löydä käyttäjää!");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);

  if(!rMember.roles.has(gRole.id)) return message.reply("Hänellä ei ole roolia!");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`RIP, sinulta poistettiin ${gRole.name} rooli`)
  }catch(e){
    message.channel.send(`RIP, <@${rMember.id}> Me poistimme ${gRole.name} roolin sinulta. Yritimme DM: tä heitä, mutta DM on lukittu.`)
  }
}

module.exports.help = {
  name: "removerole"
}
