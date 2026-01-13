import nodemailer from "nodemailer";
import { smtpConfig, BUSINESS_EMAIL } from "../config/mail.config.js";

export const sendInquiryEmail = async ({ name, email, phone, message }) => {
  const transporter = nodemailer.createTransport(smtpConfig);

  const mailOptions = {
    from: `"MS Fire Safety Website" <${smtpConfig.auth.user}>`,
    to: BUSINESS_EMAIL,
    subject: "New Inquiry from MS Fire Safety Website",
    text: `
New Inquiry Details:

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message || "None"}

Time: ${new Date().toLocaleString()}
`,
  };

  await transporter.sendMail(mailOptions);
};
