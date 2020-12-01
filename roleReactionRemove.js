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
            else if(reaction.message.id === "783341371317813358" || reaction.message.id === "783341536360398889")
            {
                switch (reaction.emoji.name) {
                    case 'GENGAMESfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod Gen Games");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;
                    case 'LOLfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod League of Legends");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;
                    case 'GAMEDEVfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod Game Development");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;
                    case 'ANIMEfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod Anime");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;
                    case 'AMONGUSfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod Among Us");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;
                    case 'BOARDfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod Board Games");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;
                    case 'PokeGOfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod Pokémon GO");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;
                    case 'YUGIOHfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod Yu-Gi-Oh");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;
                    case 'VALORANTfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod VALORANT");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;
                    case 'OTHERfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod Other Games");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;
                    case 'HALOfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod Halo");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;
                    case 'SMASHfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod Super Smash Bros");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;
                    case 'SMITEfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod Smite");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;
                    case 'RLfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod Rocket League");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;
                    case 'R6fan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod Rainbow Six Siege");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;
                    case 'OWfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod Overwatch");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;   
                    case 'HSfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod Hearthstone");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;          
                    case 'MADDENfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod Sport Games");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;
                    case 'FNfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod Fortnite");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;               
                    case 'DOTAfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod Dota 2");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;         
                    case 'CSfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod Counter Strike: Global Offensive");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;        
                    case 'CODfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod Call of Duty");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;         
                    case 'APEXfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod Apex Legends");
                        reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                        break;         
                    case 'DnDfan':
                        var role = reaction.message.guild.roles.cache.find(role => role.name === "Mod Dungeons and Dragons");
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