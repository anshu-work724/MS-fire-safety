export const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL;
export const EMAIL_FROM_NAME =
  process.env.EMAIL_FROM_NAME || "MS Fire Safety Website";
export const EMAIL_SUBJECT =
  process.env.EMAIL_SUBJECT || "New Inquiry from MS Fire Safety Website";

export const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true" || true,
  rejectUnauthorized: false, // Allow self-signed certificates
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};

// console.log("Loaded SMTP Config:", smtpConfig);
