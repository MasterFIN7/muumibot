const fs = require("fs");
const Discord = require("discord.js");

module.exports.run = async(bot, message, args, con) => {
    fs.readdir("./commands/", (err, files) => {
        if(err) console.error(err);

        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if(jsfiles.length <= 0) {
            console.log("No commands to load!");
            return;
        }

        var namelist = "";

        let result = jsfiles.forEach((f, i) => {
            let props = require(`./${f}`);
            namelist = props.help.name;
        });

        message.author.send(`**${namelist}**`);
    });
}

module.exports.help = {
  name: "help"
}
