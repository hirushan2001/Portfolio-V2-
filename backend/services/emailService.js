// backend/services/emailService.js
import nodemailer from "nodemailer";

export const sendEmail = async ({ name, email, subject, message }) => {
  const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Contact: ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  return transporter.sendMail(mailOptions);
};
