const { Telegraf } = require('telegraf');
// const { BOT_TOKEN, WEBAPP_URL } = require('./config');
require('dotenv').config();

const botToken = process.env.NUXT_BOT_TOKEN;
console.log(botToken)

if (!botToken) {
  throw new Error('BOT_TOKEN must be provided!');
}

const bot = new Telegraf(botToken);

// Basic commands
bot.command('start', (ctx) => {
  ctx.reply('Welcome to TaskVaultBot! 🚀\nUse /help to see available commands.');
});

bot.command('help', (ctx) => {
  ctx.reply(
    'Available commands:\n' +
    '/start - Start the bot\n' +
    '/help - Show this help message\n' +
    '/webapp - Open the Mini App'
  );
});

bot.command('webapp', (ctx) => {
  ctx.reply('Open Web App', {
    reply_markup: {
      inline_keyboard: [[
        // { text: "Open App", web_app: { url: WEBAPP_URL || '' }}
        { text: "Open App", web_app: { url: '123' || '' }}
      ]]
    }
  });.
});

bot.launch().then(() => {
  console.log('Bot is running...');
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));