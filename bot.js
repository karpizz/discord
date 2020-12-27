require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ['MESSAGE']
});

const BOT_PREFIX = '!';
const MOD_ME_COMMAND = 'mode-me';

client.on('ready', () => {
    console.log('Bot is ready to go');
})

client.on('messageDelete', msg => {
    msg.channel.send('Stop deleting sk blt!');
})

client.on('message', msg => {
    if (msg.content === '!love') {
        // msg.react('❤️');
        msg.channel.send('❤️');
    }
    if (msg.content === '!time') {
        msg.channel.send(getFullYear().getMonth().getDate());
    }
    if (msg.content === '!ping') {
        msg.channel.send('PONG BLEAT!')
    }
    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
        // msg.channel.send('PONG BLEAT!')
        // msg.member.roles.add('792749590273196072')
        modUser(msg.member);
        // msg.reply('Pong! yOPTA')
    }
})

function modUser(member) {
    member.roles.add('792749590273196072');
}

client.login(process.env.BOT_TOKEN);

