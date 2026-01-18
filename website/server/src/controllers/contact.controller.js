import { sendInquiryEmail } from "../services/mailer.js";

export const handleContactForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and phone are required.",
      });
    }

    console.log("[Contact] Processing inquiry from:", email);
    const emailResult = await sendInquiryEmail({ name, email, phone, message });

    // Check if email was sent successfully
    if (!emailResult.success) {
      console.error("[Contact] Email send failed:", emailResult);
      return res.status(500).json({
        success: false,
        message: "Failed to send inquiry. Please try again later.",
        error: emailResult.code,
      });
    }

    console.log("[Contact] Inquiry submitted successfully");
    return res.status(200).json({
      success: true,
      message: "Inquiry submitted successfully.",
      messageId: emailResult.messageId,
    });
  } catch (err) {
    console.error("[Contact] Unexpected error:", err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong sending your inquiry.",
    });
  }
};
