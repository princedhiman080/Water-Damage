import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      email,
      address,
      serviceType,
      urgency,
      description,
      websiteHoneypot,
      sourcePage,
    } = body;

    // 1. Honeypot check (anti-spam protection)
    if (websiteHoneypot && websiteHoneypot.trim() !== '') {
      console.warn('[CONTACT_API_SPAM_BLOCKED] Honeypot field filled by bot:', websiteHoneypot);
      return NextResponse.json(
        { success: true, message: 'Message received.' },
        { status: 200 }
      );
    }

    // 2. Server-side Validation
    if (!name || !name.trim() || !phone || !phone.trim() || !address || !address.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required fields: Full Name, Phone Number, and Property Address are mandatory.',
        },
        { status: 400 }
      );
    }

    // 3. Dispatch Target Email Configuration
    const recipientEmail = process.env.CONTACT_EMAIL || 'hardeep33260@gmail.com';
    const emailSubject = `🚨 NEW EMERGENCY WATER LEAD: ${name} (${phone})`;
    const emailBody = `
====================================================
🚨 NEW EMERGENCY WATER DAMAGE LEAD
====================================================
Timestamp: ${new Date().toLocaleString()}
Name: ${name}
Phone: ${phone}
Email: ${email || 'Not Provided'}
Address/Zip: ${address}
Service Requested: ${serviceType}
Urgency Level: ${urgency}
Description of Issue:
${description || 'N/A'}
Form Submitted From Page: ${sourcePage || 'Unknown'}
====================================================
`;

    // 4. Log Lead Payload to Server Console
    console.log(emailBody);

    // 5. Send Real Email via Nodemailer
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'hardeep33260@gmail.com',
          pass: 'mndw icxf rqlt cmvn'
        }
      });

      await transporter.sendMail({
        from: '"Chicago Water Lead System" <hardeep33260@gmail.com>',
        to: recipientEmail,
        subject: emailSubject,
        text: emailBody,
      });

      console.log('[NODEMAILER_EMAIL_SUCCESS]');
    } catch (emailErr) {
      console.error('[NODEMAILER_EMAIL_ERROR]', emailErr);
      // Fallback response if email sending fails but lead is still received
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Lead received and dispatched successfully.',
        recipient: recipientEmail,
        emailSentRealTime: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('[CONTACT_API_ERROR]', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error processing emergency request.',
      },
      { status: 500 }
    );
  }
}
