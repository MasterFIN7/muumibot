const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let sEmbed = new Discord.RichEmbed()
  .setDescription("Komennot")
  .setColor("#ffffff")
  .addField("Komennot:", "addrole\nban\nbotinfo\nclear\nembed\nhelp\nkick\nping\nremoverole\nreport\nsay\nserverinfo\ntempmute\nwarn\nwarnlevel");

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "help"
}
