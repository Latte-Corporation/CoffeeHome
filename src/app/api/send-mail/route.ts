import { NextResponse } from "next/server";
import { sendMail } from "@lib/send-mail";

export async function POST(req: Request) {
  try {
    const { subject, message } = await req.json();
    await sendMail({ subject, text: message });
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
