const Discord = require("discord.js");
const fs = require("fs");
let commandlist = JSON.parse(fs.readdir("./commands/"));

module.exports.run = async (bot, message, args) => {

  message.channel.send(commandlist);

}

module.exports.help = {
  name: "help"
}
