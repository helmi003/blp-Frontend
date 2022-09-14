import nodemailer from 'nodemailer';
export default async (req, res) => {
  const { name, mail, subject, message } = JSON.parse(req.body);
 
  const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: *******
        pass: *******
    }
});
  try {
    const email = await transporter.sendMail({
    from: mail,
    to: **************
    subject: `Contact form submission from ${name} : ${subject}`,
    html: `<p>You have a new contact form submission ${mail}</p><br>
    <p><strong>Message: </strong> ${message} </p><br>`,
    });
    console.log('Message Sent',email.messageId);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};
