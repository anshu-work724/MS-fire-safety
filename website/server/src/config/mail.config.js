export const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL;
export const EMAIL_FROM_NAME =
  process.env.EMAIL_FROM_NAME || "MS Fire Safety Website";
export const EMAIL_SUBJECT =
  process.env.EMAIL_SUBJECT || "New Inquiry from MS Fire Safety Website";

// Nodemailer SMTP Configuration for Gmail
// Uses STARTTLS on port 587 for Render compatibility (avoids implicit TLS timeout on port 465)
// Note: Gmail requires an App Password (not regular account password)
// Generate at: https://myaccount.google.com/apppasswords

// Validate required env variables
const validateEnvVars = () => {
  const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    console.error(
      "[SMTP Config] ERROR: Missing required environment variables:",
      missing,
    );
    console.log("[SMTP Config] Available env vars:", {
      SMTP_HOST: process.env.SMTP_HOST ? "✓" : "✗",
      SMTP_PORT: process.env.SMTP_PORT ? "✓" : "✗",
      SMTP_SECURE: process.env.SMTP_SECURE ? "✓" : "✗",
      SMTP_TLS_REQUIRED: process.env.SMTP_TLS_REQUIRED ? "✓" : "✗",
      SMTP_USER: process.env.SMTP_USER ? "✓" : "✗",
      SMTP_PASS: process.env.SMTP_PASS ? "✓" : "✗",
      BUSINESS_EMAIL: process.env.BUSINESS_EMAIL ? "✓" : "✗",
    });
  }
};

validateEnvVars();

export const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true", // false for STARTTLS on port 587
  requireTLS: process.env.SMTP_TLS_REQUIRED === "true", // true for STARTTLS

  // Connection timeouts - Render requires higher values
  connectionTimeout: 30000, // 30 seconds for initial connection
  socketTimeout: 30000, // 30 seconds for socket operations
  greetingTimeout: 15000, // 15 seconds for initial greeting

  // Connection pooling
  pool: {
    maxConnections: 1,
    maxMessages: 100,
    rateDelta: 1000,
    rateLimit: 5,
  },

  // Explicit auth method
  authMethod: "LOGIN",

  // TLS configuration - more permissive for Render
  tls: {
    minVersion: "TLSv1.2",
    rejectUnauthorized: false,
    servername: process.env.SMTP_HOST,
  },

  // Disable file/URL access
  disableFileAccess: true,
  disableUrlAccess: true,

  // Enhanced socket settings
  secure: false, // Use STARTTLS instead of implicit TLS

  // Logging
  logger: true,
  debug: true,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

// console.log("Loaded SMTP Config:", smtpConfig);
