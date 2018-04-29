const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  let hEmbed = new Discord.RichEmbed()
  .setTitle("**Komennot**")
  .setColor("#ffffff")
  .setThumbnail(bot.user.avatarURL)
  .addField("**ban**", "Anna porttikielto käyttäjälle.", true)
  .addField("**addrole**", "Lisää rooli käyttäjälle.", true)
  .addField("**clear**", "Tyhjentää valitun määrän viestejä.", true)
  .addField("**embed**", "Toistaa saman mitä sanot mutta eri muodossa.", true)
  .addField("**help**", "Näyttää tämän valikon.", true)
  .addField("**kick**", "Potkaise käyttäjä.", true)
  .addField("**ping**", "Näyttää botin pingin.", true)
  .addField("**removerole**", "Poistaa käyttäjän roolin.", true)
  .addField("**report**", "Reporttaa käyttäjän.", true)
  .addField("**say**", "Toistaa mitä sanot.", true)
  .addField("**tempmute**", "Mutettaa käyttäjän haluamaksi ajaksi.", true)
  .addField("**warn**", "Varoittaa käyttäjää.", true)
  .addField("**warnlevel**", "Näyttää käyttäjän varoitukset.", true);

  message.channel.send(hEmbed);

}
module.exports.help = {
  name: "help"
}
