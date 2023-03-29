// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
    .list()
    .then((messages) => messages.forEach((m) => console.log(m.sid)))
    .catch((err) => console.error(err))
    console.log('gathering log')

// async function delteAllMessages(){
    // const messages = await client.messages.list()
    // for(message of messages){
    //     console.warn(`would have dleted ${message.sid}`)
    // }
    console.log('starting pgm')
    // deleteAllMessages()
    //     .then(() => console.log("Done"))
    //     .catch((err) => {err})
// }