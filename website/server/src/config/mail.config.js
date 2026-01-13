export const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL;

export const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // Gmail on 587 uses STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
  
};
console.log("SMTP CONFIG:", smtpConfig);
