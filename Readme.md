# Discord Webhook Manager

A Node.js CLI tool to manage Discord webhooks.

## Installation
1. Clone the repository
2. Run `npm install`
3. Configure webhooks in `src/config/links.json`

## Usage
```bash
# Send a message
node src/index.js send --webhook default --message "Hello, World!"

# View messages
node src/index.js view --webhook default --limit 10

# Create transcript
node src/index.js transcript --webhook default --output transcript.txt

# Send image
node src/index.js image --webhook default --url "https://example.com/image.png"

# Add new webhook
node src/index.js webhook --add mywebhook https://discord.com/api/webhooks/...

# List webhooks
node src/index.js webhook --list