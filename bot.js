const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
var blue = 693081014066741379;
var red = 693080851134545922;
var orange = 693080914057494600;
var yellow = 693080946840174632;
var green = 693080983330619443;
var purple = 693081044433240085;



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



client.on('message', function(message){
if (message.content === "!listemotes") {
 
   const emojiList = message.guild.emojis.map((e, x) => (e) + ' | ' +e.name).join('\n');
   message.channel.send(emojiList);

}
});

client.on('message', function(message){

let splitMessage = message.content.split(" ");
		if(splitMessage[0] === '!slots') {
var emoji = message.guild.emojis.map(e=>e.toString());
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
                                                 if(message.member.roles.find("name", "Racer")){
                                                              const guildMember = message.member;
  				    if(splitMessage[1] === 'red'){
				guildMember.addRole('693080851134545922');
				message.reply('Color Applied!');
				    }
				if(splitMessage[1] === 'orange'){
				guildMember.addRole('693080914057494600');
				message.reply('Color Applied!');
				    }
				if(splitMessage[1] === 'yellow'){
				guildMember.addRole('693080946840174632');
				message.reply('Color Applied!');
				    }
				if(splitMessage[1] === 'green'){
				guildMember.addRole('693080983330619443');
				message.reply('Color Applied!');
				    }
				if(splitMessage[1] === 'lightblue'){
				guildMember.addRole('693081014066741379');
				message.reply('Color Applied!');
				    }
				if(splitMessage[1] === 'purple'){
				guildMember.addRole('693081044433240085');
				message.reply('Color Applied!');
				    }
				if(splitMessage[1] === 'darkblue'){
				guildMember.addRole('693098575651143730');
				message.reply('Color Applied!');
				}
				if(splitMessage[1] === 'list'){
				message.channel.send('Available Colors: (do !color ___ to get)  \n > red \n > orange \n > yellow \n > green \n > lightblue  \n > darkblue  \n > purple  \n Remember to do !removecolor before changing colors!');
				}
				if(splitMessage[1] !== 'list' && splitMessage[1] !== 'darkblue' && splitMessage[1] !== 'red' &&  splitMessage[1] !== 'orange' && splitMessage[1] !== 'yellow' && splitMessage[1] !== 'green' && splitMessage[1] !== 'lightblue' && splitMessage[1] !== 'purple'){
				message.reply('not a valid color');
				}
}
			}
		}
	}
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
 msg.member.removeRole('693080851134545922');
msg.member.removeRole('693080914057494600');
msg.member.removeRole('693080946840174632');
msg.member.removeRole('693080983330619443');
msg.member.removeRole('693081014066741379');
msg.member.removeRole('693098575651143730');
msg.member.removeRole('693081044433240085');
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
//var emoji = message.guild.emojis.map(e=>e.toString());
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


client.login(auth.token);