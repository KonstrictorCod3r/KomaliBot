
const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

// require('events').EventEmitter.defaultMaxListeners = 15;


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);	
	client.user.setActivity("silence b/c its not working :/", {type:"Listening"})


client.on('message', msg => {
  if (msg.content === '!Hi' || msg.content === '!hi') {
    msg.reply('Hello!');
  }
client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }
});
client.on('message', msg => {
  if (msg.content === '!Hi' || msg.content === '!slots') {
    msg.reply('Emote test');
    msg.reply(':hecome:');
  }
client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }
});
    // receivedMessage.channel.send("Message received from " + receivedMessage.author.toString() + ": " + receivedMessage.content)
});
});
});

client.login(auth.token);