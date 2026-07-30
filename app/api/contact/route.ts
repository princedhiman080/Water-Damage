import { NextRequest, NextResponse } from 'next/server';

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
    const recipientEmail = process.env.CONTACT_EMAIL || 'demo@demo.com';
    const resendApiKey = process.env.RESEND_API_KEY;
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;

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
====================================================
`;

    // 4. Log Lead Payload to Server Console
    console.log(emailBody);

    // 5. Send Real Email via Resend REST API (If RESEND_API_KEY set)
    if (resendApiKey) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: 'Chicago Water Leads <onboarding@resend.dev>',
            to: [recipientEmail],
            subject: emailSubject,
            text: emailBody,
          }),
        });

        const resendData = await resendRes.json();
        console.log('[RESEND_EMAIL_SUCCESS]', resendData);
      } catch (emailErr) {
        console.error('[RESEND_EMAIL_ERROR]', emailErr);
      }
    }

    // 6. Send Real Email via Web3Forms Free API (If WEB3FORMS_ACCESS_KEY set)
    if (web3FormsKey) {
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: emailSubject,
            from_name: 'Chicago Water Lead System',
            to_email: recipientEmail,
            name,
            phone,
            email,
            address,
            serviceType,
            urgency,
            description,
          }),
        });
        console.log('[WEB3FORMS_EMAIL_SUCCESS]');
      } catch (w3Err) {
        console.error('[WEB3FORMS_EMAIL_ERROR]', w3Err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Lead received and dispatched successfully.',
        recipient: recipientEmail,
        emailSentRealTime: Boolean(resendApiKey || web3FormsKey),
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
