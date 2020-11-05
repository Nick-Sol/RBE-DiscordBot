
//This is the example that discord.js give you to base commands off of.
//Module.explorts allows us to import code snipets.
//ping pong

module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};