export const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL;
export const EMAIL_FROM_NAME =
  process.env.EMAIL_FROM_NAME || "MS Fire Safety Website";
export const EMAIL_SUBJECT =
  process.env.EMAIL_SUBJECT || "New Inquiry from MS Fire Safety Website";

// Nodemailer SMTP Configuration for Gmail
// Uses STARTTLS on port 587 for Render compatibility (avoids implicit TLS timeout on port 465)
// Note: Gmail requires an App Password (not regular account password)
// Generate at: https://myaccount.google.com/apppasswords
export const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true", // false for STARTTLS on port 587
  requireTLS: process.env.SMTP_TLS_REQUIRED === "true", // true for STARTTLS
  connectionTimeout: 10000, // 10 seconds
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

// console.log("Loaded SMTP Config:", smtpConfig);
