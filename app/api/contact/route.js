import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    
    // Here you would typically send an email using a service like SendGrid, AWS SES, etc.
    // For now, we'll just log the data
    console.log('Contact form submission:', body);

    // You can add your email sending logic here
    // Example with SendGrid (you'll need to install @sendgrid/mail):
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    await sgMail.send({
      to: 'your-email@example.com',
      from: 'your-verified-sender@example.com',
      subject: `New Contact Form Submission: ${body.subject}`,
      text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
    });
    */

    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}