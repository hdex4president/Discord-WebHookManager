const { WebhookClient } = require('discord.js');
const { readFile } = require('./fileHandler');
const path = require('path');

async function getWebhookClient(webhookName) {
  try {
    const configPath = path.join(__dirname, '../config/links.json');
    const config = await readFile(configPath);
    const webhook = config.webhooks.find(hook => hook.name === webhookName);
    
    if (!webhook) {
      throw new Error(`Webhook ${webhookName} not found`);
    }
    
    return new WebhookClient({ url: webhook.url });
  } catch (error) {
    throw new Error(`Failed to get webhook client: ${error.message}`);
  }
}

module.exports = { getWebhookClient };