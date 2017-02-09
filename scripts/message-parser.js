function parseMessage (message) {
  const content = message.content;
  const args    = content.split(' ');

  let parsed = {
    messageInstance: message
  }

  if (args.length > 0) {
    const command = args[0];

    if (command[0] === '!') {
      parsed.command = command;
      parsed.args    = args.splice(1);
    }
  }

  return parsed;
}

module.exports = parseMessage;