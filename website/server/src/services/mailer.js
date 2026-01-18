import nodemailer from "nodemailer";
import {
  smtpConfig,
  BUSINESS_EMAIL,
  EMAIL_FROM_NAME,
  EMAIL_SUBJECT,
} from "../config/mail.config.js";

export const sendInquiryEmail = async ({ name, email, phone, message }) => {
  try {
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

    const result = await transporter.sendMail(mailOptions);
    return {
      success: true,
      message: "Email sent successfully",
      messageId: result.messageId,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      code: error.code,
    };
  }
};
