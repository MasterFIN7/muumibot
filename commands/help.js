const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  fs.readdir("./commands/", (err, files) => {
        if(err) console.error(err);

        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if(jsfiles.length <= 0) {
            console.log("No commands to load!");
            return;
        }

        var namelist = "";
        var desclist = "";
        var usage = "";

        let result = jsfiles.forEach((f, i) => {
            let props = require(`./${f}`);
            namelist = props.help.name;
            desclist = props.help.description;
            usage = props.help.usage;
        });

        message.author.send(`**${namelist}** \n${desclist} \n${usage}`);
    });

}

module.exports.help = {
  name: "help"
}
