export const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL;

export const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // Port 465 uses SSL/TLS
  rejectUnauthorized: false, // Allow self-signed certificates
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};

// console.log("Loaded SMTP Config:", smtpConfig);
