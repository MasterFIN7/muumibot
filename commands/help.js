const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let hEmbed = new Discord.RichEmbed()
  .addBlankField(true)
  .addField("Test", "Hello");

  message.channel.send(hEmbed);

}

module.exports.help = {
  name: "help"
}
