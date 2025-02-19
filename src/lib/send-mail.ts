import nodemailer from "nodemailer";

export async function sendMail({
  sendTo,
  subject,
  text,
  html,
}: {
  sendTo?: string;
  subject: string;
  text: string;
  html?: string;
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER_HOST,
    port: Number(process.env.SMTP_SERVER_PORT) || 587,
    secure: Number(process.env.SMTP_SERVER_PORT) === 465,
    auth: {
      user: process.env.SMTP_SERVER_USERNAME,
      pass: process.env.SMTP_SERVER_PASSWORD,
    },
  });

  await transporter.verify();
  const info = await transporter.sendMail({
    from: process.env.SITE_MAIL_SENDER,
    to: sendTo || process.env.SITE_MAIL_RECIEVER,
    subject,
    text,
    html: html || "",
  });

  console.log("Message sent:", info.messageId);
  return info;
}
