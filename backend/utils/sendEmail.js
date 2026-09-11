const nodemailer = require('nodemailer');

const sendEmail = async ({ email, subject, message, text }) => {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    throw new Error('Email service is not configured. Set GMAIL_USER and GMAIL_PASS in backend/.env.');
  }

  const gmailPassword = process.env.GMAIL_PASS.replace(/\s/g, '');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: gmailPassword,
    },
  });

  const mailOptions = {
    from: `"Shopvilla Support" <${process.env.GMAIL_USER}>`,
    to: email,
    subject,
    html: message,
    text: text || message.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
    replyTo: process.env.GMAIL_USER,
  };

  await transporter.sendMail(mailOptions);
  console.log(`Email successfully sent to ${email}`);
};

module.exports = sendEmail;
