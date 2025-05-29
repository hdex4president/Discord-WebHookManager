const { getWebhookClient } = require('../utils/webhookHandler');
const { error, success } = require('../utils/logger');

async function viewMessages(options) {
  try {
    const webhook = await getWebhookClient(options.webhook);
    const messages = await webhook.fetchMessages({ limit: parseInt(options.limit) });
    
    messages.forEach(msg => {
      console.log(`[${msg.createdAt}] ${msg.author.username}: ${msg.content}`);
    });
    success(`Fetched ${messages.length} messages from ${options.webhook}`);
  } catch (err) {
    error(`Failed to view messages: ${err.message}`);
  }
}

module.exports = { viewMessages };