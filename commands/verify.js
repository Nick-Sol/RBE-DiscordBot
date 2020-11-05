const fs = require('fs')
module.exports = {
	name: 'verify',
	description: 'verifies and adds user to the Redbird role',
	execute(message, args) {
		try{
            const role = message.guild.roles.cache.find(role => role.name === 'Redbirds')
            const userx = message.guild.members.cache.get(message.author.id);
            if(message.member.roles.cache.find(roles => roles.name === "Public 3.0")){
                if(args.length === 0) return;
                filename = './userfiles/'+message.author.id + '.json'   
                let rawdata = fs.readFileSync(filename);
                let userinfo = JSON.parse(rawdata);
                let author =  message.author.id; 
                //checks the verification code supplied to the verification code stored. and then removes the public roles, adds the redbird role, and cleans up the role.
                if(args[0] === String(userinfo.verify)){
                    console.log('nice')
                    const roleToRemove = message.guild.roles.cache.find(role => role.name === 'Public 2.0')
                    const roleToRemove2 = message.guild.roles.cache.find(role => role.name === 'Public 3.0')
                    const roleToRemove3 = message.guild.roles.cache.find(role => role.name === 'Public')
                    userx.roles.add(role)
                    userx.roles.remove(roleToRemove)
                    userx.roles.remove(roleToRemove2)
                    userx.roles.remove(roleToRemove3)
                    message.delete({timeout : 10000});
                }
                //verification reply if wrong.
                else{
                    message.reply('This is an inncorrect verification code. Please enter the correct code sent to you\'re ilstu email.')
                        .then( msg => {
                            msg.delete({ timeout : 10000});
                            message.delete({timeout : 10000});
                        })
                        .catch(console.error);
                }
            }
            //if you do not have public 3.0 then you cannot verify you get this role from a mod on our server
            else{
                message.reply('You do not have the correct permissions to access this command please contact a mod to solve this issue.')
                    .then( msg => {
                        msg.delete({ timeout : 10000});
                        message.delete({timeout : 10000});
                    })
                    .catch(console.error)
                }
            }
        catch(error){
            console.error(error)
        }
	},
};