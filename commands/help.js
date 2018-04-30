const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let hEmbed = new Discord.RichEmbed()
  .setColor("#ffffff")
  .addField("Komennot:", "addrole\nban\nclear\nembed\nhelp\nkick\nping\nremoverole\nreport\nsay\ntempmute\nwarn\nwarnlevel", true);

  message.channel.send(hEmbed);

}

module.exports.help = {
  name: "help"
}
