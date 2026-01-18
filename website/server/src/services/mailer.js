import nodemailer from "nodemailer";
import {
  smtpConfig,
  BUSINESS_EMAIL,
  EMAIL_FROM_NAME,
  EMAIL_SUBJECT,
} from "../config/mail.config.js";

// Retry helper function
const retryWithBackoff = async (fn, maxRetries = 3, initialDelay = 1000) => {
  let lastError;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`[Email] Attempt ${attempt}/${maxRetries}...`);
      return await fn();
    } catch (error) {
      lastError = error;
      console.error(
        `[Email] Attempt ${attempt} failed:`,
        error.code,
        error.message,
      );

      if (attempt < maxRetries) {
        const delay = initialDelay * Math.pow(2, attempt - 1); // Exponential backoff
        console.log(`[Email] Retrying in ${delay}ms...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
  throw lastError;
};

export const sendInquiryEmail = async ({ name, email, phone, message }) => {
  try {
    // Debug: Log env vars before creating transporter
    console.log("[Email] SMTP Configuration:", {
      host: smtpConfig.host,
      port: smtpConfig.port,
      user: smtpConfig.auth.user ? "✓ Loaded" : "✗ MISSING",
      pass: smtpConfig.auth.pass ? "✓ Loaded" : "✗ MISSING",
      requireTLS: smtpConfig.requireTLS,
      secure: smtpConfig.secure,
      authMethod: smtpConfig.authMethod,
    });

    console.log(
      `[Email] Creating transporter for ${smtpConfig.auth.user || "UNDEFINED USER"}...`,
    );

    // Validate auth before creating transporter
    if (!smtpConfig.auth.user || !smtpConfig.auth.pass) {
      throw new Error(
        "SMTP credentials missing. Check SMTP_USER and SMTP_PASS environment variables on Render.",
      );
    }

    // Send email with retry logic
    await retryWithBackoff(
      async () => {
        const transporter = nodemailer.createTransport(smtpConfig);

        // Verify SMTP connection before sending
        console.log("[Email] Verifying SMTP connection...");
        await transporter.verify();
        console.log("[Email] SMTP connection verified successfully");

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

        return result;
      },
      3,
      2000,
    );

    return {
      success: true,
      message: "Email sent successfully",
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
