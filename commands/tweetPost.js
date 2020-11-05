const Discord = require('discord.js')
module.exports = {
	name: 'tweetPost',
	description: 'Sends a message in specific chat for twitter updates.',
	execute(tweet, client) {
        let tweetData = tweet;
        //console.log("User :" + tweetData.user.name)
        //console.log("Text: " + tweetData.text)
        //console.log("id_str " + tweetData.id_str )

        //Creates a embed message with the data from twitter api
        var url = "https://twitter.com/Redbird_Esports/status/" + tweetData.id_str
        if(tweetData.user.id_str == '724480381840445440'){
            const tweetEmbed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('New Redbird Esports tweet!')
            .setURL('https://twitter.com/Redbird_Esports')
            .setAuthor('Reggie')
            .setThumbnail(tweetData.user.profile_image_url)
            .addFields(
                { name: 'Tweet Contents', value: tweetData.text },
                { name: 'Tweet link', value: url },
            )
            .setTimestamp()
            .setFooter('Bot made by REN');

            client.channels.cache.get('764109052950741012').send(tweetEmbed)
        }
	},
};