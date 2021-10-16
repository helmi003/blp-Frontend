const sgMail = require('@sendgrid/mail')
const SENDGRID_API_KEY='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';
sgMail.setApiKey(SENDGRID_API_KEY)
const message= {
  to: 'helmi.br1999@gmail.com', // Change to your recipient
  from: 'blp7538@gmail.com', // Change to your verified sender
  subject: `Contact form submission from helmi`,
  text: 'and easy to do anywhere, even with Node.js',
  html: `<p>You have a new contact form submission</p><br>
  <p><strong>Message: </strong> heyy there </p><br>
  `,
}
sgMail
  .send(message)
  .then((response) => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error.message)
  })


{/*const sgMail = require('@sendgrid/mail')
//`${process.env.NEXT_PUBLIC_API_URL}/api/contact`
const { name, mail, subject, message } = JSON.parse(req.body);
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'helmi.br1999@gmail.com', // Change to your recipient
  from: mail, // Change to your verified sender
  subject: `Contact form submission from ${name} : ${subject}`,
  text: 'and easy to do anywhere, even with Node.js',
  html: `<p>You have a new contact form submission</p><br>
  <p><strong>Message: </strong> ${message} </p><br>
  `,
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })*/}
{/*import nodemailer from 'nodemailer';
export default async (req, res) => {
  const { name, mail, subject, message } = JSON.parse(req.body);
 
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
};*/}