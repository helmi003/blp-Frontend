// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { jssPreset } from "@material-ui/styles"

export default async (req, res) => {
  const { name, email, message, phone } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });
  res.status(200).json({ status: 'Ok' })
}
