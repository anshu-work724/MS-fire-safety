import { sendInquiryEmail } from "../services/mailer.js";

export const handleContactForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and phone are required."
      });
    }

    await sendInquiryEmail({ name, email, phone, message });

    return res.status(200).json({
      success: true,
      message: "Inquiry submitted successfully."
    });

  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong sending your inquiry."
    });
  }
};
