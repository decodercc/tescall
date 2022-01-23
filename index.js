import { messages, clientOptions, bot } from './config.js';
import chalk from 'chalk';

if (!bot.token || !bot.webhook || !bot.channel) {
	console.log(chalk.bgRed('====================='));
	console.log(chalk.red("Ошибка окружения!"));
	if(!bot.token) console.log(chalk.yellow('Не указан токен бота!'));
	if(!bot.webhook) console.log(chalk.yellow('Не указана ссылка вебхука!'));
	if(!bot.channel) console.log(chalk.yellow('Не указан ID канала для оповещения о новых тикетах!'));
	console.log(chalk.bgRed('====================='));
	process.exit();
}
import discord from 'discord.js';
import $resolveInteractionButtonsClose from './resolvers/interactions/buttons/close.mjs';
import $resolveInteractionButtonsGet from './resolvers/interactions/buttons/get.mjs';
import $resolveInteractionSelectmenu from './resolvers/interactions/selectMenu.mjs';
import $resolveMessage from './resolvers/messageResolver.mjs';
import $threadDelete from './resolvers/threadDelete.mjs';

const client  = new discord.Client(clientOptions);

client.userLib = {
	config : messages,
	webHook: new discord.WebhookClient({url: bot.webhook}),
	tickets: new Map(),
	threads: new Map(),
	channel: {},
	getTime: function () {const date = new Date();return `(${date.getDate() > 9 ? date.getDate() : "0" + date.getDate()}.${(date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1)} ${date.getHours() > 9 ? date.getHours() : "0" + date.getHours()}:${date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()}:${date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds()}) `}
};

client.on("messageCreate", msg => $resolveMessage(client, msg));
client.on("messageDelete", msg => $resolveMessage(client, msg, "deleted"));
client.on("messageUpdate", (oldMsg, newMsg) => $resolveMessage(client, newMsg, "edited"));

client.on("threadDelete", thread => $threadDelete(client, thread));

client.on("interactionCreate", async inter => {
	if (inter.type !== "MESSAGE_COMPONENT") return;

	const [command, userId] = inter.customId.split(":");

	switch (command) {
		case 'GET':
			await $resolveInteractionButtonsGet(client, inter, userId);
			break;

		case 'CLOSE':
			await $resolveInteractionButtonsClose(client, inter, userId);
			break;

		case 'AUTOMESSAGE':
			await $resolveInteractionSelectmenu(client, inter, userId);
			break;

		default:
			console.warn(client.userLib.getTime() + `Что-то странное!`)
	}
});

client.on("ready", async () => {
	console.log(client.userLib.getTime() + `Авторизация выполнена!`);
	client.user.setActivity('Напиши в ЛС для помощи!', { type: 'WATCHING' });
	client.userLib.channel = await client.channels.fetch(bot.channel);
	console.log(client.userLib.getTime() + `Лог канал закеширован! #${client.userLib.channel.name}`);
	console.log(client.userLib.getTime() + "К работе готов!\n");
});

client.login(bot.token).then(() => {
	console.log(client.userLib.getTime() + "Авторизация...")
});