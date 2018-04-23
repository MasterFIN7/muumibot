const Discord = require("discord.js");

const PREFIX = "m!";

var bot = new Discord.Client();

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "Noob"
];

bot.on("ready", function() {
    console.log("Ready");
    bot.user.setGame("Tee m!help");
});


bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
  
    if (!message.content.startsWith(PREFIX)) return;
  
    var args = message.content.substring(PREFIX.length).split(" ");
  
    switch (args[0].toLowerCase()) {
      case "ping":
        message.channel.sendMessage(`Pong! \`${bot.pings[0]}ms\``);
        break;
      case "8ball":
        if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
        else message.channel.sendMessage("Can't read that");
        break;
      case "help":
        var embed = new Discord.RichEmbed()
        .setTitle("My Prefix is m!")
        .addField("Commands:", "ping\n8ball\nhelp")
        .setColor("WHITE")
        .setThumbnail(bot.user.avatarURL)
        message.member.sendEmbed(embed);
        
        message.reply("Check your DM.")
        break;
      default:
        message.channel.sendMessage("Invalid Command");
    }
});

bot.login(process.env.BOT_TOKEN);
