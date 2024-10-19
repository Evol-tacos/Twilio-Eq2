require('dotenv').config()
const twilio = require('twilio');

const AccSID = process.env.TWILIO_ACCOUNT_SID;
const authToken =process.env.TWILIO_AUTH_TOKEN;
const phoneTwilio = process.env.TWILIO_PHONE_NUMBER;

const client = new twilio(AccSID, authToken);

client.messages
    .create({
        body: "Vamos a ver si sale el mensaje en el wha o al numero",
        from: phoneTwilio,
        to: '+526622575633' 
    })
    .then(message => console.log('Mensaje enviado con extio', message.sid))
    .catch(error => console.log('Error al enviar el mensaje', error));