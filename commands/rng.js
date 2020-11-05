

//Really good stackoverflow post explaining this since it is not a built in feature of node.js 
//https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
module.exports = {
	name: 'rng',
	description: 'Random number generator. Defaults to a number between 0 and 10, the max is exclusive',
	execute(message, args) {


        function getRandomInt(min, max) {
            min = Number(min)
            max = Number(max)
            return Math.floor(Math.random() * max-min + 1) + min;
        }
        if(args.length === 0)
        {
            message.reply(getRandomInt(0,10));
        }
        else if(args.length === 1)
        {
            message.reply(getRandomInt(0,args[0]));
        }
        else if(args.length === 2)
        {
            message.reply(getRandomInt(args[0],args[1]));
        }
        else
        {
            message.reply("Please select at max 2 arguments spaced out like !rng 0 10");
        }

	},
};