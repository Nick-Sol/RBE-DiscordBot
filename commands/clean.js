module.exports = {
	name: 'clean',
	description: 'deletes an amount of messages specified by the user in a specific channel.',
	execute(message, args) {
        //console.log(AllowedRole) <--- artifacts from testing
        //console.log(message.guild.members.cache.get(message.author.id).roles.cache)
        //console.log(message.guild.members.cache.get(message.author.id).roles.cache.has('636600574862819348'))


        //Checks if memeber using the command has certain roles that allow for the use of the clean command. 
        //if they do have the command then it will bulk delete the amoung of messages if not it'll give them a error and delete their message and the bot error message.
        if(message.guild.members.cache.get(message.author.id).roles.cache.has('672818951008288827') || message.guild.members.cache.get(message.author.id).roles.cache.has('672818951280918530') || message.guild.members.cache.get(message.author.id).roles.cache.has('672818950408503338'))
        {
            try{
            var count = Number(args[0])
            message.channel.bulkDelete(count)
            }
            catch(error){
                message.reply("There was an error running the clean command. The clean command can only delete at max 100 messages at a time and the messages cannot be more then 14days old.")
                    .then( msg => {
                        msg.delete({ timeout : 10000});
                        message.delete({timeout : 10000});
                    })
                    .catch(console.error);
            }
        }
        else
        {
            message.reply("You do not have the permissions to use this command.")
                .then( msg => {
                    msg.delete({ timeout : 10000});
                    message.delete({timeout : 10000});
                })
                .catch(console.error);
        }

	},
};