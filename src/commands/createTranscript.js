const { getWebhookClient } = require('../utils/webhookHandler');
const { writeFile } = require('../utils/fileHandler');
const { error, success } = require('../utils/logger');
const path = require('path');

async function createTranscript(options) {
  try {
    const webhook = await getWebhookClient(options.webhook);
    const messages = await webhook.fetchMessages({ limit: 100 });
    
    const transcript = messages.map(msg => 
      `[${msg.createdAt}] ${msg.author.username}: ${msg.content}`
    ).join('\n');
    
    const outputPath = options.output || `transcript_${Date.now()}.txt`;
    await writeFile(outputPath, transcript);
    success(`Transcript created at ${outputPath}`);
  } catch (err) {
    error(`Failed to create transcript: ${err.message}`);
  }
}

module.exports = { createTranscript };