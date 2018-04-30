const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

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


bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);

    bot.user.setActivity("V 1.0 | m!help", {type: "PLAYING"});

    //bot.user.setGame("V 1.0");
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;


    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);


    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

    // if(cmd === `${prefix}serverinfo`){
    //
    //     let sicon = message.guild.iconURL;
    //     let sembed = new Discord.RichEmbed()
    //     .setDescription("Server information")
    //     .setColor("#ffffff")
    //     .setThumbnail(sicon)
    //     .addField("Server name", message.guild.name)
    //     .addField("Created On", message.guild.createdAt)
    //     .addField("You joined", message.member.joinedAt)
    //     .addField("Total Members", message.guild.memberCount);
    //
    //     return message.channel.send(sembed);
    // }
    //
    //
    // if(cmd === `${prefix}report`){
    //
    //     let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    //     if(!rUser) return message.channel.send("En löydä käyttäjää!");
    //     let reason = args.join(" ").slice(22);
    //
    //     let reportEmbed = new Discord.RichEmbed()
    //     .setDescription("Reports")
    //     .setColor("#ffffff")
    //     .addField("Reported user", `${rUser} with ID: ${rUser.id}`)
    //     .addField("Reported by", `${message.author} with ID: ${message.author.id}`)
    //     .addField("Channel", message.channel)
    //     .addField("Time", message.createdAt)
    //     .addField("Reason", reason);
    //
    //
    //     let reportschannel = message.guild.channels.find(`name`, "reports");
    //     if(!reportschannel) return message.channel.send("En löydä kanavaa!");
    //
    //
    //     message.delete().catch(O_o=>{});
    //     reportschannel.send(reportEmbed);
    //
    //     return;
    // }
    //
    //
    //
    // if(cmd === `${prefix}botinfo`){
    //
    //     let bicon = bot.user.displayAvatarURL;
    //     let botembed = new Discord.RichEmbed()
    //     .setDescription("Infoa botista")
    //     .setColor("#ffffff")
    //     .setThumbnail(bicon)
    //     .addField("Bot name", bot.user.username)
    //     .addField("Created On", bot.user.createdAt);
    //
    //     return message.channel.send(botembed);
    // }
});

bot.login(botconfig.token);
