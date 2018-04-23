const Discord = require("discord.js");

var economy = require('discord-eco');

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
    bot.user.setGame("Use m!help");
});

economy.fetchBalance('userID').then((i) => {
    console.log(i) // { userID: '144645791145918464', money: 998, lastDaily: 'Not Collected' }
    console.log(i.money) // 998
});

economy.updateBalance('userID', 'value').then((i) => {
    console.log(i) // Returns the updated result.
    console.log(i) // Returns the updated result.
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
  
    if (!message.content.startsWith(PREFIX)) return;
  
    var args = message.content.substring(PREFIX.length).split(" ");
  
    switch (args[0].toLowerCase()) {
      case "ping":
        message.channel.sendMessage(`ping is ${Math.round(client.ping)}ms`);
        break;
      case "8ball":
        if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
        else message.channel.sendMessage("Can't read that");
        break;
    case "balance":
        economy.fetchBalance(message.author.id).then((i) => {
            message.channel.send(`**Balance:** ${i.money}`);
        });
        break;
    case "payday":
        economy.updateBalance(message.author.id, 500).then((i) => { // economy.updateBalance grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
            message.channel.send(`**You got $500!**\n**New Balance:** ${i.money}`);
        });
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
