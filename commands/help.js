const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let hEmbed = new Discord.RichEmbed()
  .setTitle("Komennot")
  .Title("Moi");

  message.channel.send(hEmbed);

}

module.exports.help = {
  name: "help"
}
