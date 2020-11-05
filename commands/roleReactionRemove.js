module.exports = {
	name: 'roleReactionRemove',
	description: 'This is not a usable command and is meant to be for onReact events only. The way this works is just the inverse of roleReactionAdd.js see comments their for more info',
	execute(reaction, user) {
		try {
            //This works clean up later tho
            reaction.fetch();
            //Notes before launch Gamesystems roles need to be updated to match the role name.
            const useableRoles = ["MTGfan","GENGAMESfan", "LOLfan","GAMEDEVfan","ANIMEfan","AMONGUSfan","BOARDfan","PokeGOfan","YUGIOHfan","VALORANTfan","GEARSfan","OTHERfan","TARKOVfan","HALOfan","SWITCHfan","MOBILEfan","RETROfan","PSfan","XBOXfan","PCfan","SMASHfan","SMITEfan","RLfan","R6fan","PUBGfan","OWfan","NBA2Kfan","HSfan","MADDENfan","FNfan","FIFAfan","DOTAfan","CSfan","CODfan","APEXfan","DnDfan"]
            console.log(useableRoles.includes(reaction.emoji.name))
            if("745849680839311451" === reaction.message.id || "745850345867182202" === reaction.message.id || "745851278776729623" === reaction.message.id || "745851306702405713" === reaction.message.id || "745851333436899398" === reaction.message.id || "764199391241175087" === reaction.message.id ){
                if(useableRoles.includes(reaction.emoji.name))
                {
                    var role = reaction.message.guild.roles.cache.find(role => role.name === reaction.emoji.name)
                    console.log(user)
                    reaction.message.guild.members.cache.get(user.id).roles.remove(role)
                }
                else
                {
                    switch (reaction.emoji.name) {
                        case '🇭':
                            var role = reaction.message.guild.roles.cache.find(role => role.name === "Hewitt Hall");
                            reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                            break;
                        case '🐦':
                            var role = reaction.message.guild.roles.cache.find(role => role.name === "Cardinal Court");
                            reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                            break;
                        case '🇲':
                            var role = reaction.message.guild.roles.cache.find(role => role.name === "Manchester Hall");
                            reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                            break;
                        case '🏘️':
                            var role = reaction.message.guild.roles.cache.find(role => role.name === "Off Campus Housing");
                            reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                            break;
                        case '🇹':
                            var role = reaction.message.guild.roles.cache.find(role => role.name === "Tri Towers");
                            reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                            break;
                        case '🇼':
                            var role = reaction.message.guild.roles.cache.find(role => role.name === "Watterson Towers");
                            reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                            break;
                        case '📰':
                            var role = reaction.message.guild.roles.cache.find(role => role.name === "results");
                            reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                            break;
                        case '💚':
                            var role = reaction.message.guild.roles.cache.find(role => role.name === "ze/zir/zirs");
                            reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                            break;
                        case '🤍':
                            var role = reaction.message.guild.roles.cache.find(role => role.name === "she/her/hers");
                            reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                            break;
                        case '💙':
                            var role = reaction.message.guild.roles.cache.find(role => role.name === "they/them/their");
                            reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                            break;
                        case '💜':
                            var role = reaction.message.guild.roles.cache.find(role => role.name === "he/him/his");
                            reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                            break;
                        default:
                          console.log(`test`);
                      }
                      
                }
                
                //console.log(role)
            }
            else if(reaction.message.id === "748609199994568724")
            {
                switch (reaction.emoji.name) {
                    case 'PCfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "OWpc");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;
                    case 'PSfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "OWps");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;
                    case 'XBOXfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "OWxbox");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;
                    default:
                        console.log(`test`);
                }
            }
            else{
                console.log("Reaction out of bounds.")
            }
        }
        catch (error) 
        {
            console.error('Something went wrong: ', error);
            return;
        }
	},
};