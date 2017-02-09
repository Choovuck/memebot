// Inject a tag to logs
(function() {
  const log = console.log;
  console.log = function() {
    let args = Array.prototype.slice.call(arguments);
    args.unshift('[MEMEBOT]');
    log.apply(this, args);
  }
})();

const discord = require('discord.js');
const client  = new discord.Client();
const config  = require('./config.json');
const token   = config['bot-secret'];
const MemeBot = require('./scripts/meme-bot');
const bot     = new MemeBot();

client.on('ready', () => {
  console.log('ready');
});

client.on('message', bot.onMessage.bind(bot));

client.login(token)
  .then(() => {
    console.log('logged in');
  })
  .catch((e) => {
    console.log('couldn\'t login: ', e);
  });