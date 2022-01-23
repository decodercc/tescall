export const bot = {
	token: '',
	channel: '',
	webhook: ''
}

export const messages = {
	hello: "Здравствуйте, %NAME%!",
	helloDescription: "Вас рада приветствовать служба поддержки Vare!\nВ скором времени Вам будет назначен агент поддержки, который постарается решить ваш вопрос!",
	goodbye: "Тикет был завершён агентом поддержки!",
	goodbyeDescription: "Спасибо за обращение!\nДля повторного обращения, необходимо будет написать сообщение с темой нового тикета в этот чат!",
	waiting: "⚠ Пожалуйста, дождитесь, пока ваш тикет будет принят агентом поддержки!",
	stuffJoined: "К вам присоединился агент поддержки!",
	chatEnabled: "С этого момента вы находитесь в чате!"
};

export const replies = [
	{
		label: "Ожидайте перепроверки",
		value: "botReCheck",
		description: "Здравствуйте и спасибо за предоставленную информацию, ожидайте перепроверки!",
		emoji: "🛠"
	},
	{
		label: "#шпаргалка",
		value: "botShpora",
		description: "Убедитесь, пожалуйста, что ваш бот соответствует всему, что есть в канале #шпаргалка!",
		emoji: "🗑"
	},
	{
		label: "Права ботов",
		value: "botPerms",
		description: "На тестовом сервере установлены эти права для ботов...",
		emoji: "🛡"
	},
	{
		label: "Проблема с /up",
		value: "upIssue",
		description: "На всех серверах бот добавил свои слеш команды...",
		emoji: "🆙"
	},
];

export const repliesMessages = {
	botReCheck: "Здравствуйте и спасибо за предоставленную информацию, ожидайте перепроверки!",
	botShpora: "Убедитесь, пожалуйста, что ваш бот соответствует всему, что есть в канале #шпаргалка!",
	botPerms: "На тестовом сервере установлены эти права для ботов: https://cdn.discordapp.com/attachments/669972218868138025/880823412614897724/testRole.png",
	upIssue: "На всех серверах бот добавил свои слеш команды, однако, если этого не произошло, то перепригласите бота с правом «Создание слеш-команд»!\nПриглашение бота: https://discord.com/oauth2/authorize?client_id=464272403766444044&scope=bot+applications.commands&permissions=3533825",
};

export const clientOptions = {
	intents: ["GUILDS", "DIRECT_MESSAGES", "GUILD_MESSAGES"],
	partials: ["CHANNEL"]
};

export const colors = {
	grey: '#666666',
	green: '#378D53',
	blue: '#7083CF',
	red: '#D82D42',
	yellow: '#FFAC33'
}