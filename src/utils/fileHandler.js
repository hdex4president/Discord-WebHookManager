const fs = require('fs-extra');

async function readFile(filePath) {
  try {
    return await fs.readJson(filePath);
  } catch (error) {
    throw new Error(`Error reading file ${filePath}: ${error.message}`);
  }
}

async function writeFile(filePath, data) {
  try {
    await fs.writeJson(filePath, data, { spaces: 2 });
  } catch (error) {
    throw new Error(`Error writing file ${filePath}: ${error.message}`);
  }
}

module.exports = { readFile, writeFile };