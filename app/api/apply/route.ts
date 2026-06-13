import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, business, location, students, pain, email, phone } = body;

    if (!name || !business || !location || !students || !pain || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Send email notification via Postmark
    const postmarkKey = process.env.POSTMARK_API_KEY;
    if (!postmarkKey) {
      console.error("Missing POSTMARK_API_KEY");
      return NextResponse.json({ error: "Server config error" }, { status: 500 });
    }

    const emailBody = `
New Consulting Application

Name: ${name}
Business: ${business}
Location: ${location}
Active Students: ${students}
Email: ${email}
Phone: ${phone || "Not provided"}

Biggest Operational Headache:
${pain}

—
Submitted via consulting validation page
`;

    const res = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Postmark-Server-Token": postmarkKey,
      },
      body: JSON.stringify({
        From: "kyle@ngeniusprep.com",
        To: "kyle@ngeniusprep.com",
        Subject: `🚀 New Consulting Application — ${name} (${business})`,
        TextBody: emailBody,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Postmark error:", err);
      return NextResponse.json({ error: "Email send failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Apply API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
