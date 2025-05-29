const log = (message, type = 'info') => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
};

const error = (message) => log(message, 'error');
const success = (message) => log(message, 'success');

module.exports = { log, error, success };