// backend/controllers/emailController.js
import { sendEmail } from "../services/emailService.js";

export const handleSendEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await sendEmail({ name, email, subject, message });
    res.status(200).json({ success: true, message: "Email sent successfully" });
  }catch (error) {
  console.error("Email error:", error);
  res.status(500).json({ success: false, message: "Email failed to send", error: error.message });
}

};
