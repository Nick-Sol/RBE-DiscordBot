


module.exports = {
	name: 'args-info',
	description: 'Just a testing function to make sure the handler was working. But a good way to make sure you are parsing commands correctly.',
	execute(message, args) {
		message.channel.send(`Command name: ${command}\nArguments: ${args}`);
        message.delete({timeout : 10000});
        if (!args.length) {
            message.reply(`You didn't provide any arguments!`)
            .then( msg => {
                msg.delete({ timeout : 10000});
                message.delete({timeout : 10000});
                })
            .catch(console.error)
        }
	},
};