require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ['MESSAGE']
});

const BOT_PREFIX = '!';
const MOD_ME_COMMAND = 'mode-me';

client.on('ready', () => {
    console.log('Bot is ready to go 💚');
})

client.on('ready', () => {
    console.log('Bot is ready to go');
})

client.on('messageDelete', msg => {
    msg.channel.send('Stop deleting sk blt!');
})
const ats = ['Pong yopta!', '💩💩💩', 'Your ping is: 1154ms! Stop downloading P*rn', '✌✌✌']
client.on('message', msg => {
    const rnd = Math.floor(Math.random() * ats.length);
    if (msg.content === '!love') {
        // msg.react('❤️');
        msg.channel.send('❤️');
    }
    if (msg.content === '!time') {
        msg.channel.send('792772003303522316');
    }
    if (msg.content === '!ping') {
        msg.channel.send(ats[rnd])
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

