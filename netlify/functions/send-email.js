exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  const { user_email, subject, message } = body;

  if (!user_email || !subject || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing required fields" }) };
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(user_email)) {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid email address" }) };
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
    const text = await response.text();
    console.error("EmailJS error:", text);
    return { statusCode: 500, body: JSON.stringify({ error: "Failed to send email" }) };
  }

  return { statusCode: 200, body: JSON.stringify({ success: true }) };
};
