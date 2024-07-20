// Copyright © 2024 Sapirrior
const { ShardingManager } = require('discord.js');

const manager = new ShardingManager('./scuttler.js', { token: 'YOUR_BOT_TOKEN_HERE' });

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

manager.spawn();
