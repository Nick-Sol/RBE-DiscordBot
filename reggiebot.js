const Discord = require('discord.js');
const fs = require('fs');
const nodemailer = require('nodemailer');
const Twit = require('twit');
const roleReactionRemove = require('./commands/roleReactionRemove');





const client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']})
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) 
{
    const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const { prefix, token, consumer_keyU, consumer_secretU, access_tokenU, access_token_secretU, pass } = require('./config.json');

client.on('ready', () => {
    console.log("Connected as " + client.user.tag);
    //This is a joke please change the status to something else
    client.user.setActivity("Washing Hands" , {type: "PLAYING"})
    console.log('Hello World.')
})

//Setup a more offical email, change the message, change role names.


//This is lowercase since we pass commands through a tolowercase for userinput cleaning purposes.
const nonUserCommands = ["rolereactionadd", "rolereactionremove"]



var T = new Twit({
    consumer_key:         consumer_keyU,
    consumer_secret:      consumer_secretU,
    access_token:         access_tokenU,
    access_token_secret:  access_token_secretU,
  })
var stream = T.stream('statuses/filter', { follow: '724480381840445440' })

stream.on('tweet', function (tweet) {
    client.commands.get('tweetPost').execute(tweet, client);
  })


client.on('message', message =>{
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    //This stops the bot from answering to it's own messages and if a command like rolereactionremove is called since we only are suppose to use this on certain events not being called by the user.
    if(message.author.bot || nonUserCommands.includes(command)){ return}

    //Disregards messages without the prefix. If the message is in the verification channel responds to the user and then deletes both messages.
    //This is how we monitor grovey bot commands and makes sure that it is in bot channel
    const groveyCommands = ["back", "next", "stop", "skip", "disconnect", "play"];
    if(message.content.startsWith('-') && groveyCommands.includes(command))
    {
    
        if(message.channel.id !== "672855098086653982")
        {
            message.reply("Please use grovey bot in the #bot channel")
                .then(message.delete())
            //Deletes the user's message
           // and then reply that you need to use bot and then delete that message.
        }
    }
    //This is used so if a non-!Verify or !Email command is used in the #verify channel it notifies the user to only use those commands in that channel.
    //Also catches messages with no prefix
    else if(!message.content.startsWith(prefix)){
        if(client.channels.cache.get('748230263515119788') === message.channel && message.author.bot === false){
            try{
                message.reply('This channel is only for the !email and !verify command please only use these commands. If you are having issues please open a ticket.')
                    .then( msg => {
                        msg.delete({timeout :10000});
                        message.delete({timeout : 10000});
                    })
                    .catch(console.error)
            }
            catch(error){
                console.error(error)
            }
            return
        }
    }
    //Since we parse for '-' now we need a state ment to catch ACTUAL commands and make sure it is using the correct prefix.
    //This might be able to go the else if statement on line 74 to reduce redundancy.
    if(message.author.bot || nonUserCommands.includes(command) || message.content.startsWith('-')){ return}


    //This if else chain is how we check what command is being used there is better ways of doing this that is more dynamic and the stucture is there for it just need to take the time
    //to create and test.
    //change this channel id to what ever channel the verification process takes place.
    if(client.channels.cache.get('748230263515119788') === message.channel && message.author.bot === false){
        if(command === 'email'){
            client.commands.get('email').execute(pass, message, args);
        }
        //Add if to stop command if already has roles
        else if(command === 'verify'){
            client.commands.get('verify').execute(message, args);
        }
        else{}
    }
    else if(command === "ping")
    {
        client.commands.get('ping').execute(message, args);
    }
    else if(command === "rng")
    {
        try
        {
            client.commands.get('rng').execute(message, args);
        }
        catch (error)
        {
            console.error(error)
        }

    }
    else if(command === "clean")
    {
        client.commands.get('clean').execute(message, args);
    }
    else{}
})

client.on('messageReactionAdd', (reaction, user) => {
    client.commands.get('roleReactionAdd').execute(reaction, user);
})

client.on('messageReactionRemove', (reaction, user) => {
    client.commands.get('roleReactionRemove').execute(reaction, user);
})

//When a guild memeber joins the server we use this to add the 'Public' role and then send a message welcoming them to the server and sending social media links.
client.on('guildMemberAdd', (member) =>{
    try{
    var role = member.guild.roles.cache.find(role => role.name === "Public");
    member.roles.add(role);
    member.createDM()
        .then( dm => {dm.send("Welcome to Redbird Esports!  Please see the instructions in the :wave:welcome channel on how to get verified.  This server is open to Illinois State University students, alumni, staff, and faculty only.\n\n" +

        "Check out our social media:\n\n" +
        
        "Twitter: <https://twitter.com/Redbird_Esports> \n" +
        "Discord: <https://www.discord.gg/Redbirdesports> \n" +
        "Facebook: <https://www.facebook.com/ISURedbirdEsports> \n" +
        "Instagram: <https://www.instagram.com/redbirdesports> \n" +
        "Youtube: <https://www.youtube.com/channel/UCd7_wY88AAKow71-gmM2agw> \n" +
        "Twitch: <https://www.twitch.tv/redbirdesports> \n" )});
    }
    catch(error){
        console.error(error);
    }
})

//This is how we handle assigning the streaming role to a user (This most likely can be its own command but first want to make sure its running smoothly since I found some errors already)
client.on('presenceUpdate', (oldPresence, newPresence) =>{
    try{
        const streamRole = newPresence.guild.roles.cache.find(role => role.name === "🔴 - Currently Streaming");
        //console.log(streamRole);
        //The reason we use undefined here is because when a presence changes it does not require an activity (IE. going from away to online with not playing anything)
        //This will throw an error saying that 'newPresence.activities[0]' is undefined causing our logs to get spammed with errors. Their might be a better way of handling this but thats what I got for now.
        if(newPresence.activities[0] !== undefined){ 
            //once the users presence is streaming add the role.
            if(newPresence.activities[0].type === 'STREAMING'){
                newPresence.guild.members.cache.get(newPresence.userID).roles.add(streamRole);
                console.log("Stream Role Added");
            }
            //Once a user is no longer streaming and the user has the role take the role away
            else if((newPresence.activities[0].type !== 'STREAMING') && newPresence.guild.members.cache.get(newPresence.userID).roles.cache.has('748586477151060119')){
                console.log("Stream Role removed");
                newPresence.guild.members.cache.get(newPresence.user.id).roles.remove(streamRole);
            }
            else{}
        }
        //This is to deal with people who don't show game status so we check the oldPresence since the code block above doesn't take into account blank activities
        else if(newPresence.activities[0] === undefined && oldPresence.activities[0].type === "STREAMING"){
            console.log("Stream Role removed");
            newPresence.guild.members.cache.get(newPresence.user.id).roles.remove(streamRole);
        }
    }
    catch (error){
        console.log("Error in presenceUpdate code block");
    }

    
})

client.login(token);
