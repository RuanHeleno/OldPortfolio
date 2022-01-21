import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
});
  
contactEmail.verify((error) => {
    if (error) console.log(error);
    else console.log("Ready to Send");
});

router.post("/send", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const mail = {
      from: name,
      to: process.env.EMAIL,
      subject: subject,
      text: `${name} <${email}> \n${message}`,
    };

    contactEmail.sendMail(mail, (error) => {
      if (error) res.json({ status: "ERROR" });
      else res.json({ status: "Message Sent" });
    });
});