// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

type Data = {
  name: string;
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  console.log(req.body.name);
  try {
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      pool: true,

      // true for 465, false for other ports
      auth: {
        user: "sauvikbanerjjee@gmail.com", // generated ethereal user
        pass: "wztcboomnjqjbkdl", // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "sauvikbanerjjee@gmail.com", // sender address
      to: "sovs76@icloud.com", // list of receivers
      subject: "Sauvikbanerjjee.com Website Contact Us", // Subject line
      // plain text body
      html: `
      <li> Name: ${req.body?.name} </li> 
        <li>Email: ${req.body?.email} </li> 
           <li>Phone: ${req.body?.phone} </li> 

             <li>Time Stamp : ${moment().format('MMMM Do YYYY, h:mm:ss a')} </li>
      `, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  } catch (error) {
    console.log(error);
  }
}
