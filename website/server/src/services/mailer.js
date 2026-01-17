import nodemailer from "nodemailer";
import {
  smtpConfig,
  BUSINESS_EMAIL,
  EMAIL_FROM_NAME,
  EMAIL_SUBJECT,
} from "../config/mail.config.js";

export const sendInquiryEmail = async ({ name, email, phone, message }) => {
  const transporter = nodemailer.createTransport(smtpConfig);

  const mailOptions = {
    from: `"${EMAIL_FROM_NAME}" <${smtpConfig.auth.user}>`,
    to: BUSINESS_EMAIL,
    subject: EMAIL_SUBJECT,
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
