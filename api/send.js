const sgMail = require('@sendgrid/mail');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const data = req.body || {};
  const { fullName, phone, email, date, timeSlot, treatment, message } = data;

  if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_FROM_EMAIL || !process.env.APPOINTMENT_EMAIL) {
    console.error('Missing SendGrid configuration');
    return res.status(500).json({ ok: false, error: 'Email service not configured' });
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const to = process.env.APPOINTMENT_EMAIL;
  const from = process.env.SENDGRID_FROM_EMAIL;
  const subject = `Appointment Request - ${fullName || 'New Request'}`;
  const text = [
    `Name: ${fullName || ''}`,
    `Phone: ${phone || ''}`,
    `Email: ${email || ''}`,
    `Date: ${date || ''}`,
    `Time Slot: ${timeSlot || ''}`,
    `Treatment: ${treatment || ''}`,
    `Message: ${message || ''}`,
  ].join('\n');

  const html = `
    <h2>New Appointment Request</h2>
    <p><strong>Name:</strong> ${fullName || ''}</p>
    <p><strong>Phone:</strong> ${phone || ''}</p>
    <p><strong>Email:</strong> ${email || ''}</p>
    <p><strong>Date:</strong> ${date || ''}</p>
    <p><strong>Time Slot:</strong> ${timeSlot || ''}</p>
    <p><strong>Treatment:</strong> ${treatment || ''}</p>
    <p><strong>Message:</strong><br/>${(message || '').replace(/\n/g, '<br/>')}</p>
  `;

  const msg = {
    to,
    from,
    subject,
    text,
    html,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('SendGrid error:', error);
    return res.status(500).json({ ok: false, error: 'send_failed' });
  }
};
