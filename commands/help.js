const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let sEmbed = new Discord.RichEmbed()
  .setColor("#ffffff")
  .setThumbnail(bot.user.avatarURL)
  .addField("Komennot:", "addrole, ban, botinfo, clear, embed, help, kick, ping, removerole, report, say, serverinfo, tempmute, warn ja warnlevel");

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "help"
}
