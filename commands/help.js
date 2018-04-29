const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  let hEmbed = new Discord.RichEmbed()
  .setTitle("**Komennot**")
  .setColor("#ffffff")
  .setDescription("**ban** Anna porttikielto käyttäjälle.")
  .setDescription("**addrole** Lisää rooli käyttäjälle.")
  .setDescription("**clear** Tyhjentää valitun määrän viestejä.")
  .setDescription("**embed** Toistaa saman mitä sanot mutta eri muodossa.")
  .setDescription("**help** Näyttää tämän valikon.")
  .setDescription("**kick** Potkaise käyttäjä.")
  .setDescription("**ping** Näyttää botin pingin.")
  .setDescription("**removerole** Poistaa käyttäjän roolin.")
  .setDescription("**report** Reporttaa käyttäjän.")
  .setDescription("**say** Toistaa mitä sanot.")
  .setDescription("**tempmute** Mutettaa käyttäjän haluamaksi ajaksi.")
  .setDescription("**warn** Varoittaa käyttäjää.")
  .setDescription("**warnlevel** Näyttää käyttäjän varoitukset.");

  message.channel.send(hEmbed);

}
module.exports.help = {
  name: "help"
}
