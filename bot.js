const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
var blue = 693081014066741379;
var red = 693080851134545922;
var orange = 693080914057494600;
var yellow = 693080946840174632;
var green = 693080983330619443;
var purple = 693081044433240085;
const { Client, MessageAttachment } = require('discord.js');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);	
	client.user.setActivity("Lior Bot", {type:"Listening"})
});
require('events').EventEmitter.defaultMaxListeners = 100;
var f;
var f2;
var rep;
var rep2;
var catrand


client.on('message', function(message){
if (message.content === "!test") {
message.channel.send(message.attachments + message.id)


}
});

//_______________________________


client.on('message', msg => {
  if (msg.channel.type == "dm") {
   
client.channels.cache.get('700132470858842142').send(msg.author.tag);
//client.channels.cache.get('700120906218864680').send(msg.content) 

  }
});

//submission id = 700132470858842142
//id = 700120906218864680

//________________________________

client.on('message', ({attachments, content, guild}) => {
  // only do this for DMs
  if (!guild) {
    // this will simply send all the attachments, if there are any, or the message content
    // you might also want to check that the content is a link as well
    
    const submission = attachments.size ? {files: attachments.array()} : content
    client.channels.cache.get('700132470858842142').send(submission)
//client.channels.cache.get('700120906218864690').send();
  }
})

client.on('message', function(message){
if (message.content === "!meow") {
catrand = Math.floor(Math.random() * 2);
if(catrand == 0){
message.channel.send("<:stella:692397952362348546>");
}
if(catrand == 1){
message.channel.send("<:luna:692401472352157787>");
}
}
});

/*

client.on('message', function(message){
if (message.content === "!listemotes") {
 
   const emojiList = message.guild.emojis.map((e, x) => (e) + ' | ' +e.name).join('\n');
   message.channel.send(emojiList);

}
});
*/
client.on('message', function(message){

let splitMessage = message.content.split(" ");
		if(splitMessage[0] === '!slots') {
var emoji = message.guild.emojis.cache.map(e=>e.toString());
var out = "";
function repeat(func, times) {
    func();
    times && --times && repeat(func, times);
}






rep = splitMessage[1];
if(rep == undefined){
rep = 3
}
if(rep == 1){
rep = 3;
}
if(isNaN(rep) == true){
rep = 3
}
if(rep >= 50){
rep = 50
}


//out = emoji[Math.floor(Math.random() * emoji.length)];
repeat(function () {
f = emoji[Math.floor(Math.random() * emoji.length)];
out = out + f + " ";
}, rep);


message.channel.send(out);
message.channel.send("Please Play Again!");
}
});




const PREFIX = "!";
client.on('message', function(message) {
	if(message.content[0] === PREFIX) {
		let splitMessage = message.content.split(" ");
		if(splitMessage[0] === '!color') {
			if(splitMessage.length === 2) {
                                                 if(message.member.roles.cache.some(role => role.name === 'Racer')){
                                                              const guildMember = message.member;
				color_lower = splitMessage[1].toLowerCase()
  				if(color_lower === 'red'){
				guildMember.roles.add('693080851134545922');
				message.reply('Color Applied!');
				} else if(color_lower === 'orange'){
				guildMember.roles.add('693080914057494600');
				message.reply('Color Applied!');
				} else if(color_lower === 'yellow'){
				guildMember.roles.add('693080946840174632');
				message.reply('Color Applied!');
				} else if(color_lower === 'green'){
				guildMember.roles.add('693080983330619443');
				message.reply('Color Applied!');
				} else if(color_lower === 'lightblue'){
				guildMember.roles.add('693081014066741379');
				message.reply('Color Applied!');
				} else if(color_lower === 'purple'){
				guildMember.roles.add('693081044433240085');
				message.reply('Color Applied!');
				} else if(color_lower === 'darkblue'){
				guildMember.roles.add('693098575651143730');
				message.reply('Color Applied!');
				} else if(color_lower === 'list'){
				message.channel.send('Available Colors: (do !color ___ to get)  \n > red \n > orange \n > yellow \n > green \n > lightblue  \n > darkblue  \n > purple  \n Remember to do !removecolor before changing colors!');
				} else {
				message.reply('not a valid color');
				}
}
			}
		}
	}
});



client.on('message', msg => {
  if (msg.content === '!help' || msg.content === '!commands') {
var message = "```Komali Bot Commands: \n !help / !commands \n !slots (number, defaults to 3, maxes out at 30) \n !selfdestruct / !self destruct \n !hello / !hi \n !meow \n !hype / !yay \n !listemotes \n !goodbye / !good bye \n !color (color) / !removecolor  (only for racers)```";
    msg.channel.send(message);



  }
client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }
});
});


client.on('message', msg => {
  if (msg.content === '!hi' || msg.content === '!hello') {
    msg.reply('Hello!');
  }
client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }
});
});
client.on('message', msg => {
  if (msg.content === '!good bye' || msg.content === '!goodbye') {
    msg.reply('Bye!');
  }
client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }
});
});

client.on('message', msg => {
  if (msg.content === '!hype' || msg.content === '!yay') {
    msg.channel.send('<:POGGERS:691701513155772457><:POGGERS:691701513155772457><:POGGERS:691701513155772457><:POGGERS:691701513155772457><:POGGERS:691701513155772457><:POGGERS:691701513155772457><:POGGERS:691701513155772457><:POGGERS:691701513155772457>');
  }
client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }
});
});

client.on('message', msg => {
  if (msg.content === '!removecolor') {
 msg.member.roles.remove('693080851134545922');
msg.member.roles.remove('693080914057494600');
msg.member.roles.remove('693080946840174632');
msg.member.roles.remove('693080983330619443');
msg.member.roles.remove('693081014066741379');
msg.member.roles.remove('693098575651143730');
msg.member.roles.remove('693081044433240085');
msg.reply('Colors Removed');
client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }
});
};
});
client.on('message', function(message){

if (message.content === '!selfdestruct' || message.content === '!self destruct') {
function print(str){
message.channel.send(str);
}
print("Initiating Self Destruct");
setTimeout(() => {
  print("3");
}, 1000);
setTimeout(() => {
  print("2");
}, 2000);
setTimeout(() => {
  print("1");
}, 3000);
setTimeout(() => {
  print("```at users\\Komali\\data\\KomaliBot\\source.zip\\commands\\selfdestruct\\raw\.js \n \[ERROR\] CODE_ID 1A8358HK5 	\n        at line 323532:132 \n        function self_destruction not found \n        unreferenced character \"$\" in script at Line 284619:1\n        invalid variable \"sequence\" at Line 3:142\n        function aborted \n \[\/ERROR\]```");
}, 4000);
}
});

client.on('message', function(message){

let splitMessage = message.content.split(" ");
		if(splitMessage[0] === '!slotz') {
//var emoji = message.guild.emojis.cache.map(e=>e.toString());
var out2 = "";
function repeat(func, times) {
    func();
    times && --times && repeat(func, times);
}






rep2 = splitMessage[1];
if(rep2 == undefined){
rep = 3
}
if(rep2 == 1){
rep2 = 3;
}
if(isNaN(rep2) == true){
rep2 = 3
}
if(rep >= 50){
rep2 = 50
}


//out = emoji[Math.floor(Math.random() * emoji.length)];
repeat(function () {

out2 = out2 + "<:POGGERS:691701513155772457>" + " ";
}, rep2);


message.channel.send(out2);
message.channel.send("Please Play Again!");
}
});

client.on('message', function(message){
if (message.content.includes("\@Komali Bot\#6783")) {
    message.channel.send("Pinged \:0");
  }
});
client.login(auth.token);
