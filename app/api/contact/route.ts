import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // TODO: Implement email sending using nodemailer
    // For now, just log the message and return success
    console.log('Contact form submission:', { name, email, subject, message });

    // You can integrate email sending here with nodemailer
    // Example: await sendEmail(...)

    return NextResponse.json(
      { message: 'Message received. We will get back to you soon!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}
