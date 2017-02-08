const Discord = require('discord.js');

const bot = new Discord.Client();

const config = require('./config.json');
const token  = config['bot-secret'];

bot.on('ready', () => {
  console.log('MEME BOT ENABLED');
});

bot.on('message', message => {
  if (message.content == 'ping')
    message.reply('pong');
});

bot.login(token);