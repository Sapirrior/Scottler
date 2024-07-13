// Copyright © 2024 Sapirrior
const { ShardingManager } = require('discord.js');

const manager = new ShardingManager('./aura.js', { token: 'YOUR_BOT_TOKEN_HERE' });

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

manager.spawn();
