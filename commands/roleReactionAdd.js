module.exports = {
	name: 'roleReactionAdd',
	description: 'This is not a usable command and is meant to be for onReact events only',
	execute(reaction, user) {
        try {
            //gets older reacts so we can see new adds
            reaction.fetch();
            //Need to add gaming leagues but the issue is the role name.
            const useableRoles = ["MTGfan","GENGAMESfan", "LOLfan","GAMEDEVfan","ANIMEfan","AMONGUSfan","BOARDfan","PokeGOfan","YUGIOHfan","VALORANTfan","GEARSfan","OTHERfan","TARKOVfan","HALOfan","SWITCHfan","MOBILEfan","RETROfan","PSfan","XBOXfan","PCfan","SMASHfan","SMITEfan","RLfan","R6fan","PUBGfan","OWfan","NBA2Kfan","HSfan","MADDENfan","FNfan","FIFAfan","DOTAfan","CSfan","CODfan","APEXfan","DnDfan"]
            //console.log(reaction.emoji.name)
            //console.log(useableRoles.includes(reaction.emoji.name));
            //overall this takes the reaction and channel and assigns roles based on that
            //for the most part it is dynamic with if the role name == emoji name it'll assign.
            if(reaction.message.id === "748306689840906260" && reaction.emoji.name === "✅")
            {
                const role = reaction.message.guild.roles.cache.find(role => role.name === "Public 2.0");
                reaction.message.guild.members.cache.get(user.id).roles.add(role);
            }
            else if(reaction.message.id === "748609199994568724")
            {
                switch (reaction.emoji.name) {
                    case 'PCfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "OWpc");
                        reaction.message.guild.members.cache.get(user.id).roles.add(role);
                        break;
                    case 'PSfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "OWps");
                        reaction.message.guild.members.cache.get(user.id).roles.add(role);
                        break;
                    case 'XBOXfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "OWxbox");
                        reaction.message.guild.members.cache.get(user.id).roles.add(role);
                        break;
                    default:
                        console.log(`test`);
                }
            }
            else
            {
                if("745849680839311451" === reaction.message.id || "745850345867182202" === reaction.message.id || "745851278776729623" === reaction.message.id || "745851306702405713" === reaction.message.id || "745851333436899398" === reaction.message.id || "764199391241175087" === reaction.message.id )
                {
                    //This is what we useto make sure people dont get admin roles by allowing roles.
                    if(useableRoles.includes(reaction.emoji.name))
                    {
                        var role = reaction.message.guild.roles.cache.find(role => role.name === reaction.emoji.name);
            
                        console.log(user);
                        reaction.message.guild.members.cache.get(user.id).roles.add(role);
                    }
                    else
                    {
                        //roles that the emoji is different then the role name we use a switch here.
                        console.log(reaction.emoji.name)
                        switch (reaction.emoji.name) {
                            case '🇭':
                                var role = reaction.message.guild.roles.cache.find(role => role.name === "Hewitt Hall");
                                reaction.message.guild.members.cache.get(user.id).roles.add(role);
                                break;
                            case '🐦':
                                var role = reaction.message.guild.roles.cache.find(role => role.name === "Cardinal Court");
                                reaction.message.guild.members.cache.get(user.id).roles.add(role);
                                break;
                            case '🇲':
                                var role = reaction.message.guild.roles.cache.find(role => role.name === "Manchester Hall");
                              reaction.message.guild.members.cache.get(user.id).roles.add(role);
                              break;
                            case '🏘️':
                                var role = reaction.message.guild.roles.cache.find(role => role.name === "Off Campus Housing");
                                reaction.message.guild.members.cache.get(user.id).roles.add(role);
                                break;
                            case '🇹':
                                var role = reaction.message.guild.roles.cache.find(role => role.name === "Tri Towers");
                                reaction.message.guild.members.cache.get(user.id).roles.add(role);
                                break;
                            case '🇼':
                                var role = reaction.message.guild.roles.cache.find(role => role.name === "Watterson Towers");
                                reaction.message.guild.members.cache.get(user.id).roles.add(role);
                                break;
                            case '📰':
                                var role = reaction.message.guild.roles.cache.find(role => role.name === "results");
                                reaction.message.guild.members.cache.get(user.id).roles.add(role);
                                break;
                            case '💚':
                                var role = reaction.message.guild.roles.cache.find(role => role.name === "ze/zir/zirs");
                                reaction.message.guild.members.cache.get(user.id).roles.add(role);
                                break;
                            case '🤍':
                                var role = reaction.message.guild.roles.cache.find(role => role.name === "she/her/hers");
                                reaction.message.guild.members.cache.get(user.id).roles.add(role);
                                break;
                            case '💙':
                                var role = reaction.message.guild.roles.cache.find(role => role.name === "they/them/their");
                                reaction.message.guild.members.cache.get(user.id).roles.add(role);
                                break;
                            case '💜':
                                var role = reaction.message.guild.roles.cache.find(role => role.name === "he/him/his");
                                reaction.message.guild.members.cache.get(user.id).roles.add(role);
                                break;
                            default:
                              console.log(`test`);
                          }
                    }
                }
                else{}
            }
            //console.log(role)
        } 
        catch (error) 
        {
            console.error('Something went wrong: ', error);

            return;
        }
	},
};