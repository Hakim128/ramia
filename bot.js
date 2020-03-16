const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("688745243809677322")
setInterval(function() {
channel.send(`ما طاح حيلليّ ولا ضاقتَ بي ضلوعي
‏بحاول انسٌى واعيش اليوم مع بكره `);
}, 20)
})

client.login(process.env.BOT_TOKEN);