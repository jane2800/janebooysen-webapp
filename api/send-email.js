// Vercel serverless function: POST /api/send-email
// Needs EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID and EMAILJS_PUBLIC_KEY in Vercel's environment variables.
module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const body = typeof req.body === "string" ? safeParse(req.body) : req.body;
  if (!body) return res.status(400).json({ error: "Invalid JSON" });

  const { user_email, subject, message } = body;

  if (!user_email || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(user_email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      template_params: { user_email, subject, message },
    }),
  });

  if (!response.ok) {
    console.error("EmailJS error:", await response.text());
    return res.status(500).json({ error: "Failed to send email" });
  }

  return res.status(200).json({ success: true });
};

function safeParse(s) {
  try { return JSON.parse(s); } catch { return null; }
}
