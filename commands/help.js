const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let hEmbed = new Discord.RichEmbed()
  .addBlankField("Test");

  message.channel.send(hEmbed);

}

module.exports.help = {
  name: "help"
}
