const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {



  message.channel.send({embed: {
    .setTitle("**Komennot**")
    .setColor("#ffffff")
    .Description: "**ban** Anna porttikielto käyttäjälle."
    .Description: "**addrole** Lisää rooli käyttäjälle."
    .Description: "**clear** Tyhjentää valitun määrän viestejä."
    .Description: "**embed** Toistaa saman mitä sanot mutta eri muodossa."
    .Description: "**help** Näyttää tämän valikon."
    .Description: "**kick** Potkaise käyttäjä."
    .Description: "**ping** Näyttää botin pingin."
    .Description: "**removerole** Poistaa käyttäjän roolin."
    .Description: "**report** Reporttaa käyttäjän."
    .Description: "**say** Toistaa mitä sanot."
    .Description: "**tempmute** Mutettaa käyttäjän haluamaksi ajaksi."
    .Description: "**warn** Varoittaa käyttäjää."
    .Description: "**warnlevel** Näyttää käyttäjän varoitukset."
  }});

}
module.exports.help = {
  name: "help"
}
