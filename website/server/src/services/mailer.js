import nodemailer from "nodemailer";
import {
  smtpConfig,
  BUSINESS_EMAIL,
  EMAIL_FROM_NAME,
  EMAIL_SUBJECT,
} from "../config/mail.config.js";

export const sendInquiryEmail = async ({ name, email, phone, message }) => {
  try {
    console.log(`[Email] Creating transporter for ${smtpConfig.auth.user}...`);
    const transporter = nodemailer.createTransport(smtpConfig);

    // Verify SMTP connection before sending
    try {
      console.log("[Email] Verifying SMTP connection...");
      await transporter.verify();
      console.log("[Email] SMTP connection verified successfully");
    } catch (verifyError) {
      console.error("[Email] SMTP verification failed:", verifyError.message);
      throw verifyError;
    }

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

    console.log("[Email] Sending inquiry email to:", BUSINESS_EMAIL);
    const result = await transporter.sendMail(mailOptions);
    console.log(
      "[Email] Email sent successfully. Message ID:",
      result.messageId,
    );

    return {
      success: true,
      message: "Email sent successfully",
      messageId: result.messageId,
    };
  } catch (error) {
    console.error("[Email] Error sending email:", {
      code: error.code,
      message: error.message,
      response: error.response,
      command: error.command,
    });

    return {
      success: false,
      message: error.message,
      code: error.code,
    };
  }
};
