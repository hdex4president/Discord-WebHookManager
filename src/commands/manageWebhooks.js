const { readFile, writeFile } = require('../utils/fileHandler');
const { error, success } = require('../utils/logger');
const path = require('path');

async function addWebhook(name, url) {
  try {
    const configPath = path.join(__dirname, '../config/links.json');
    const config = await readFile(configPath);
    
    config.webhooks.push({ name, url });
    await writeFile(configPath, config);
    success(`Webhook ${name} added successfully`);
  } catch (err) {
    error(`Failed to add webhook: ${err.message}`);
  }
}

async function listWebhooks() {
  try {
    const configPath = path.join(__dirname, '../config/links.json');
    const config = await readFile(configPath);
    
    console.log('Available Webhooks:');
    config.webhooks.forEach(hook => {
      console.log(`- ${hook.name}`);
    });
  } catch (err) {
    error(`Failed to list webhooks: ${err.message}`);
  }
}

module.exports = { addWebhook, listWebhooks };