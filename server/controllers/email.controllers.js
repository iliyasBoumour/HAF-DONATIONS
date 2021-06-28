const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");

exports.sendEmail = asyncHandler(async (req, res) => {
  const { name, email, message, subject } = req.body;
  if (!name || !email || !message) {
    res.status(400).json({ msg: "Fill All Fields !" });
    return;
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });
  const emailMsg = `
  <div style='background: rgba(149, 157, 16,0.3); padding:10px;  padding-left:20%;   padding-right:20%;'>
  <h2 style='text-align:center'>HAF DONATIONS</h2>
  <div style=' background: #fff; padding:10px; padding-left:10%;   padding-right:10%;'>
    <h3>HELLO</h3>
    <b>you have a new message from :</b>
    <div style='margin-left:20px'>
      <h5 style='margin-bottom:0px;margin-top:10px'>NAME: ${name}</h5>
      <h5 style='margin-top:10px;;margin-bottom:0px'>EMAIL: ${email}</h5>
      <div style='display:flex; align-item:center'>
      <h5 style='margin-top:10px;'>MESSAGE :</h5> <h5 style='margin:10px;'>${message}</h5></div>
    </div>
    <button style='background: #fff; color: #839c44; padding:10px; border-color:#839c44; '>See message</button>
</div>
  <h6 style='text-align:center'>&copy; HAF. All rights reserved.</h6>
</div>
  `;

  await transporter.sendMail({
    to: process.env.MAIL_USERNAME,
    subject: subject || "HAF DONATIONS",
    html: emailMsg,
  });
  res.status(201).json(req.body);
});
