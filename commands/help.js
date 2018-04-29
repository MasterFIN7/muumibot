const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("En loydä komentoja!");
      return;
    }

    jsfile.forEach((f, i) =>{
      let props = require(`./commands/${f}`);
      console.log(`${f} loaded!`);
      bot.commands.set(props.help.name, props);
    });
  });

  message.channel.send(`${props}`);

}
module.exports.help = {
  name: "help"
}
