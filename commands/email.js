
const fs = require('fs')
const nodemailer = require('nodemailer');

module.exports = {
	name: 'email',
	description: 'emails a user to send a verification code. Also writes a user json file and to a csv.',
	execute(pass, message, args) {
        //People kept puting this email since we used it as an example and turns out athletics uses this email so our bot spammed their inbox.
		if(args.length === 0 || args[0] === "reggie@ilstu.edu"){
            message.delete({timeout : 10000});
            return;
        }
        emails = args[0]
        domain = emails.split('@')
        //console.log(domain) <-- Artifacts from testing
        //Generates random verification code.
        let verificationCode = Math.floor(Math.random()*90000) + 10000;

        //Checks if the domain is an ilstu.edu email and if they don't already have a json file that exists meaning they already have a code.
        if(domain[1] === 'ilstu.edu' && !fs.existsSync('./userfiles/'+message.author.id + '.json')){
            //makes json data
            let userJsonData = {'verify' : verificationCode, 'UserName': message.author.tag, "IlstuEmail" : emails, "DiscordID" : message.author.id};
            //makes csv line and appends it to file
            let csvData = userJsonData['verify'] + ',' + userJsonData['UserName'] + ',' + userJsonData["IlstuEmail"] + ',' + userJsonData["DiscordID"]+ '\n'
            fs.appendFile('UserDataBase.csv', csvData, function (err){
                if (err) throw err;
                console.log('File Write error')
            } )
            let data = JSON.stringify(userJsonData,null,2) // honestly dont remember the null part but 2 I believe is the spacing.
            //Write json file to userFiles folder
            let filename  = './userfiles/'+message.author.id + '.json'
            fs.writeFile(filename, data , (err)=> {
                if(err) throw err;
                console.log("File write")
            })
            //uses nodemailer to email this code is from how they recommend sending emails from my memory .
            let transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: { // I used google we probably want to create a new account for this
                    user: 'ISUReggieBot@gmail.com',
                    pass: pass
                    }});
            var mailOptions = {
                from: 'ISUReggieBot@gmail.com', //Change this
                to: emails,
                subject: 'Redbird Esports Discord Verification',
                text: 
                'Hello and Welcome to the Redbird Esports Discord server! \n\n' + 
                'You are on your way to getting verified, thank you for your patience with this process. ' +
                'The next step is to create a ticket using the ticket tool found in the #verify channel. ' +
                'A moderator will then assist you with the final step. \n\nPlease remember this code: ' + verificationCode +
                
                '\n\nThank you, \n\n' +
                
                'Reggiebot\nRedbird Esports Discord'          
                };
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }  
            message.delete({timeout : 10000});
            })
        }
        //used if they already have a file or its a non isu email.
        else{
            message.reply('This is a non ilstu email or you already have a verification code. Please contact a mod for more information.')
                .then( msg => {
                    msg.delete({ timeout : 10000});
                    message.delete({timeout : 10000});
                })
                .catch(console.error)
        }
    }
}
