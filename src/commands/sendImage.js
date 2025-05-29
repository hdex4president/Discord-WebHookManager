const { getWebhookClient } = require('../utils/webhookHandler');
const { error, success } = require('../utils/logger');

async function sendImage(options) {
  try {
    const webhook = await getWebhookClient(options.webhook);
    await webhook.send({
      files: [options.url]
    });
    success(`Image sent successfully to ${options.webhook}`);
  } catch (err) {
    error(`Failed to send image: ${err.message}`);
  }
}

module.exports = { sendImage };