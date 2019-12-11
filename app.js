const http = require('http')
var nodemailer = require('nodemailer')
require('dotenv').config()

const server = http.createServer((req, res))

let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    secure: true,
    auth: {
       user: '67b09bbbf65d47',
       pass: 'eef7441d212233'
    }
});

var emailASerEnviado = {
    from: process.env.EMAIL_REMETENTE,
    to: 'aleatorium0@gmail.com',
    subject: 'Enviando Email com Node.js',
    text: 'Estou te enviando este email com node.js',
};

transport.sendMail(emailASerEnviado, function(error){
    if (error) {
        console.log(error);
    } else {
        console.log('Email enviado com sucesso.');
    }
});