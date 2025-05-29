const { getWebhookClient } = require('../utils/webhookHandler');
const { error, success } = require('../utils/logger');

async function sendMessage(options) {
  try {
    const webhook = await getWebhookClient(options.webhook);
    await webhook.send({
      content: options.message,
    });
    success(`Message sent successfully to ${options.webhook}`);
  } catch (err) {
    error(`Failed to send message: ${err.message}`);
  }
}

module.exports = { sendMessage };