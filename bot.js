onst Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.MkYfv3_d6LzTTmM-2rNhMrjh12TXnWfm);//BOT_TOKEN is the Client Secret
