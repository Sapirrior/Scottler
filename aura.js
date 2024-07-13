const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

const words = ['https://', 'discord.gg/', 'http://'];

client.on('ready', () => {

  console.log('bot is ready!');

});

client.on('messageCreate', (message) => {

  

  if(message.author.bot) return;

  

  if(message.author.id === message.guild.ownerId) return;

  

  for(const word of words) {

    if(message.content.includes(word)) {

      message.delete().catch(err => console.error('failed'));

    }

  }

})

client.login('YOUR_BOT_TOKEN_HERE')
