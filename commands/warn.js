const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Ei.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!wUser) return message.reply("En löydä käyttäjää!");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Ei.");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err);
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setColor("#820000")
  .addField("Varoitettu käyttäjä", `<@${wUser.id}>`)
  .addField("Varoitettu", message.channel)
  .addField("Varoitusten määrä", warns[wUser.id].warns)
  .addField("Syy", reason);

  let warnchannel = message.guild.channels.find(`name`, "incidents");
  if(!warnchannel) return message.reply("En löydä kanavaa!");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 3){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("En löydä roolia!");

    let mutetime = "1h";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> on väliaikaisesti mutetettu.`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`Hänen mutetus on ohi!`)
    }, ms(mutetime))
  }

  if(warns[wUser.id].warns == 6){
    message.guild.member(wUser).ban(reason);
    message.channel.send(`${wUser.tag} On bännätty!`);
  }

}

module.exports.help = {
  name: "warn"
}
