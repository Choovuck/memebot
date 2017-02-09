const messageParser = require('./message-parser');
const modules       = require('./modules');

class MemeBot {
  constructor() {
    this.modules = [];

    this.init();
  }

  init() {
    for (const moduleClass of modules)
      this.modules.push(new moduleClass());
  }

  onMessage(message) {
    const parsed = messageParser(message);
    if (!parsed.command)
      return;

    for (const module of this.modules)
      if (module.handleMessage && module.handleMessage(parsed))
        break;
  }
}

module.exports = MemeBot;