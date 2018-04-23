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
        message.channel.sendMessage(`Pong! \`${client.pings[0]}ms\``);
        break;
      case "8ball":
        if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
        else message.channel.sendMessage("Can't read that");
        break;
      case "kick":
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("En löydä käyttäjää!");
        let kReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
        if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

        var kickEmbed = new Discord.RichEmbed()
        .setDescription("~Kick~")
        .addField("Kicked user", `${kUser} with ID ${kUser.id}`)
        .addField("Kicked by", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Kicked In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", kReason);

        let kickChannel = message.guild.channels.find(`name`, "incidents");
        if(!kickChannel) return message.channel.send("Can't find incidents channel.");

        message.guild.member(kUser).kick(kReason);
        kickChannel.send(kickEmbed);
        break;
      case "ban":
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send("En löydä käyttäjää!");
        let bReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
        if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned!");

        var banEmbed = new Discord.RichEmbed()
        .setDescription("~Ban~")
        .addField("Banned user", `${bUser} with ID ${bUser.id}`)
        .addField("Banned by", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Banned In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", bReason);

        let banChannel = message.guild.channels.find(`name`, "incidents");
        if(!banChannel) return message.channel.send("Can't find incidents channel.");

        message.guild.member(bUser).ban(bReason);
        banChannel.send(banEmbed);
        break;
      case "say":
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Ei");
        let botmessage = args.join(" ");
        message.delete().catch();
        message.channel.send(botmessage);
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
