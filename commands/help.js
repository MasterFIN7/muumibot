const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let sEmbed = new Discord.RichEmbed()
  .setColor("#ffffff")
  .setThumbnail(bot.user.avatarURL)
  .setTitle("**Komennot**")
  .setDescription("Prefix on `m!`")

  .addField("**addrole** Lisää jollekkin rooli.")
  .addField("**ban** Anna jäsenelle porttikielto.")
  .addField("**clear** Tyhjennä valittu määrä viestejä.")
  .addField("**embed** Toistaa mitä sanot eri muodossa.")
  .addField("**help** Näyttää tämän listan.")
  .addField("**kick** Potki jäsen.")
  .addField("**ping** Näyttää botin Pingi.")
  .addField("**removerole** Poista joku rooli.")
  .addField("**report** Reporttaa käyttäjän.")
  .addField("**say** Toistaa mitä sanot.")
  .addField("**tempmute** Mykistä joku.")
  .addField("**warn** Varoita jäsentä.")
  .addField("**warnlevel** Näyttää jäsenen varoitukset");

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "help"
}
