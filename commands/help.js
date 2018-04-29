const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  let hEmbed = new Discord.RichEmbed()
  .setTitle("**Komennot**")
  .setColor("#ffffff")
  .setThumbnail(bot.user.avatarURL)
  .addBlankField("**ban**", "Anna porttikielto käyttäjälle.");

  message.channel.send(hEmbed);

}
module.exports.help = {
  name: "help"
}
