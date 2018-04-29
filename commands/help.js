const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let sEmbed = new Discord.RichEmbed()
  .setColor("#ffffff")
  .setThumbnail(bot.user.avatarURL)
  .setTitle("**Komennot**")
  .setDescription("Prefix on `m!`")

  .setTitle("**addrole** Lisää jollekkin rooli.")
  .setTitle("**ban** Anna jäsenelle porttikielto.")
  .setTitle("**clear** Tyhjennä valittu määrä viestejä.")
  .setTitle("**embed** Toistaa mitä sanot eri muodossa.")
  .setTitle("**help** Näyttää tämän listan.")
  .setTitle("**kick** Potki jäsen.")
  .setTitle("**ping** Näyttää botin Pingi.")
  .setTitle("**removerole** Poista joku rooli.")
  .setTitle("**report** Reporttaa käyttäjän.")
  .setTitle("**say** Toistaa mitä sanot.")
  .setTitle("**tempmute** Mykistä joku.")
  .setTitle("**warn** Varoita jäsentä.")
  .setTitle("**warnlevel** Näyttää jäsenen varoitukset");

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "help"
}
