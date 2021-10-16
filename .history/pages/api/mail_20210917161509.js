import nodemailer from 'nodemailer';
export default async (req, res) => {
  const { name, email, subjects, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smpt.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
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
};