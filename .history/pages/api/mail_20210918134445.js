/*import nodemailer from 'nodemailer';
export default async (req, res) => {
  const { name, email, subjects, message } = req.body;
 
  const transporter = nodemailer.createTransport({
    //	Janet Rohan : name
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'janet.rohan89@ethereal.email',
        pass: '3eSGs3nBcdP8GRXvw3'
    }
});
  try {
    const emailRes = await transporter.sendMail({
    from: email,
    to: 'helmi.br1999@gmail.com',
    subject: `Contact form submission from ${name} : ${subjects}`,
    html: `<p>You have a new contact form submission</p><br>
    <p><strong>Message: </strong> ${message} </p><br>
    `,
    });

    console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};*/
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
            user: 'my.email@gmail.com',
            clientId: 'XXXXXXXXXXXX-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.apps.googleusercontent.com',
            clientSecret: 'XXXXXXXXXXXXXXXXXXXXXXXX',
            refreshToken: 'X/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
        })
    }
})

var mailOptions = {
    from: 'My Name <my.email@gmail.com>',
    to: 'receiver.email@gmail.com',
    subject: 'Nodemailer test',
    text: 'Hello World!!'
}

transporter.sendMail(mailOptions, function (err, res) {
    if(err){
        console.log('Error');
    } else {
        console.log('Email Sent');
    }
})