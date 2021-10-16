import nodemailer from 'nodemailer';
export default async (req, res) => {
  const { name, mail, subject, message } = JSON.parse(req.body);
 
  const transporter = nodemailer.createTransport({
    //	Janet Rohan : name
    host: 'smtp.gmail.com',
    Requires SSL: Yes,
    Port: 993,
    auth: {
        user: 'blp7538@gmail.com',
        pass: 'blp7538@'
    }
});
  try {
    const email = await transporter.sendMail({
    from: mail,
    to: 'helmibenromdhane65@gmail.com',
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