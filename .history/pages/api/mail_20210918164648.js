import nodemailer from 'nodemailer';
export default async (req, res) => {
  const { name, mail, subject, message } = JSON.parse(req.body);
 
  const transporter = nodemailer.createTransport({
    //	Janet Rohan : name
    host: 'gmail.com',
    port: 465,
    secure:true,
    auth: {
        user: 'helmi.br1999@gmail.com',
        pass: '7elmib441999br'
    }
});

  try {
    const email = await transporter.sendMail({
    from: mail,
    to: 'helmi.br1999@gmail.com',
    subject: `Contact form submission from ${name} : ${subject}`,
    html: `<p>You have a new contact form submission</p><br>
    <p><strong>Message: </strong> ${message} </p><br>
    `,
    });

    console.log('Message Sent',email.messageId);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};
/*const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
            user: 'helmi.br1999@gmail.com',
            clientId: '306705191091-j3f5081ogdgivptf2mr8ccde68op7s1t.apps.googleusercontent.com',
            clientSecret: '4AbiedYTW3hilBwZvaIbXt57',
            refreshToken: 'X/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
        })
    }
})

var mailOptions = {
    from: 'My Name <helmi.br1999@gmail.com>',
    to: 'helmibenromdhane65@gmail.com>',
    subject: 'Nodemailer test',
    text: 'Hello World!!'
}

transporter.sendMail(mailOptions, function (err, res) {
    if(err){
        console.log('Error');
    } else {
        console.log('Email Sent');
    }
})*/