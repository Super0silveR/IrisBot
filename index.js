const Discord = require('discord.js');
const token = "Your Token here";

const client = new Discord.Client();

//This line shows how to send a message as the bot on the channel where the message is sent. And example would be !iris {your message}
client.on('message', (msg) => {
  if (msg.content.startsWith('!'+client.user.username.toLowerCase()+' ')) {
    reply = msg.content.split('!'+client.user.username.toLowerCase()+' ')[1];
    msg.delete().catch();
    msg.channel.send(reply);
  }

//This lines are to update the Bot username. Notice : The bot username is different from the bot servername; Username follows discord's restrictions (avaliable name/formating). Example !IrisSetName {The new name}

  if (msg.content.startsWith('!'+client.user.username+'SetName ')) {
    name = msg.content.split('!'+client.user.username+'SetName ')[1];
    try {
      client.user.setUsername(name);
      msg.channel.send("My new name is "+client.user.username);
    } catch (e) {
      msg.channel.send("My new name is still "+client.user.username+" try again later!");
    }
  }

//This lines is to update the bot avatar. Simply attach a picture to the command. Example : !IrisMakeup {attach a picture}
  if (msg.content.startsWith('!'+client.user.username+'Makeup')) {
    avatar = msg.attachments.first().url;
    client.user.setAvatar(avatar);
  }
})

client.on('ready', () => {
  console.log('Bot is now connected');
});

client.login(token);
