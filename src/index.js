#!/usr/bin/env node

const { program } = require('commander');
const { sendMessage } = require('./commands/sendMessage');
const { viewMessages } = require('./commands/viewMessages');
const { createTranscript } = require('./commands/createTranscript');
const { sendImage } = require('./commands/sendImage');
const { addWebhook, listWebhooks } = require('./commands/manageWebhooks');

program
  .version('1.0.0')
  .description('Discord Webhook Manager');

program
  .command('send')
  .description('Send a message to a webhook')
  .option('-w, --webhook <name>', 'Webhook name')
  .option('-m, --message <content>', 'Message content')
  .action(sendMessage);

program
  .command('view')
  .description('View messages from a webhook')
  .option('-w, --webhook <name>', 'Webhook name')
  .option('-l, --limit <number>', 'Number of messages to fetch', 10)
  .action(viewMessages);

program
  .command('transcript')
  .description('Create a transcript of messages')
  .option('-w, --webhook <name>', 'Webhook name')
  .option('-o, --output <path>', 'Output file path')
  .action(createTranscript);

program
  .command('image')
  .description('Send an image via URL')
  .option('-w, --webhook <name>', 'Webhook name')
  .option('-u, --url <url>', 'Image URL')
  .action(sendImage);

program
  .command('webhook')
  .description('Manage webhooks')
  .option('-a, --add <name> <url>', 'Add new webhook')
  .option('-l, --list', 'List all webhooks')
  .action((options) => {
    if (options.add) {
      const [name, url] = options.add.split(' ');
      addWebhook(name, url);
    } else if (options.list) {
      listWebhooks();
    }
  });

program.parse(process.argv);