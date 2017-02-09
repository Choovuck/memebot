class PingModule {
  handleMessage(message) {
    if (message.command !== '!ping')
      return false;

    message.messageInstance.reply('pong!');
    return true;
  }
}

module.exports = PingModule;