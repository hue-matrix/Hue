# EmailJS Setup Guide for Hue Matrix

This guide will help you set up EmailJS to send form submissions from the Hue Matrix website to your email account.

## What is EmailJS?

EmailJS allows you to send emails directly from your frontend code without needing a backend server. Perfect for contact forms and inquiries!

## Step 1: Create an EmailJS Account

1. Visit [EmailJS.com](https://www.emailjs.com)
2. Click **"Sign Up Free"**
3. Sign up using your email address or social account (Google, GitHub, etc.)
4. Verify your email address
5. Log into your EmailJS dashboard

## Step 2: Create a New Email Service

1. In the EmailJS dashboard, go to **"Email Services"** (left sidebar)
2. Click **"Add Service"** or **"Create New"**
3. Choose your email provider:
   - **Gmail** (recommended for easy setup)
   - **Outlook/Hotmail**
   - **Yahoo**
   - **Custom SMTP**
4. For Gmail:
   - Select "Gmail" from the service list
   - Click "Connect Account"
   - Sign in with your Google account (use hello@huematrix.in)
   - Grant EmailJS permission to send emails
   - Name the service (e.g., "Gmail Service")
5. Click **"Create Service"**
6. Copy your **Service ID** (looks like: `service_xxxxxxxxx`)

## Step 3: Create Email Templates

### Template for Contact Us & Work With Us Forms

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Name it: `contact_form_template` (or `work_with_us_template`)
4. In the template editor, use this structure:

```
From: {{user_email}}
Subject: New {{form_type}} Submission from {{user_name}}

Name: {{user_name}}
Email: {{user_email}}
Phone: {{phone}}

---

{{#if company}}
Company: {{company}}
{{/if}}

{{#if services}}
Services/Interests: {{services}}
{{/if}}

{{#if location}}
Location: {{location}}
{{/if}}

{{#if project_types}}
Project Types: {{project_types}}
{{/if}}

{{#if experience}}
Experience: {{experience}}
{{/if}}

{{#if portfolio}}
Portfolio: {{portfolio}}
{{/if}}

Message:
{{message}}
```

5. Click **"Create Template"**
6. Copy your **Template ID** (looks like: `template_xxxxxxxxx`)

### Optional: Create a Confirmation Template (for auto-responses)

1. Create another template called `confirmation_email`
2. Use this content:

```
Subject: We've received your message - Hue Matrix

Hi {{user_name}},

Thank you for getting in touch with us! We've received your submission and our team will review it shortly.

We'll be in touch within 24 hours.

Best regards,
Hue Matrix Team
hello@huematrix.in
```

3. Copy this **Template ID** as well

## Step 4: Get Your Public Key

1. Go to **"Account"** (top right profile menu)
2. Click on your profile picture → **"Account"**
3. In the **"General"** tab, you'll see your **Public Key**
4. Copy it (looks like: `xxxxxxxxx_xxxxxxxxx_xxxx`)

## Step 5: Configure Environment Variables

1. In your project root, find or create a `.env.local` file
2. Add these variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxx_xxxxxxxxx_xxxx
```

Replace with your actual IDs from EmailJS.

3. **Important**: These variables are prefixed with `NEXT_PUBLIC_` so they're available in the browser. Don't add sensitive secrets here.

## Step 6: Test the Setup

1. Start your development server:
```bash
npm run dev
```

2. Navigate to:
   - Contact form: `http://localhost:3000/contact`
   - Work With Us form: `http://localhost:3000/work-with-us`

3. Fill out and submit a test form

4. Check if you received an email in your inbox at **hello@huematrix.in**

5. If successful, you'll see: ✅ "Thank you! We'll be in touch shortly."

## Step 7: Customize Email Destination

To change where emails are sent:

1. Go to **Email Services** → Your Gmail service
2. Click **"Settings"** (gear icon)
3. Under **"Recipient Email"**, make sure it shows `hello@huematrix.in`
4. You can add additional recipients here

## Troubleshooting

### "Failed to send message" error

**Check the following:**

1. **Service ID**: Verify it matches exactly in `.env.local`
2. **Template ID**: Confirm the template ID is correct
3. **Public Key**: Make sure the public key is complete
4. **Email Service Connected**: In EmailJS dashboard, ensure Gmail is properly connected
5. **Form Variable Names**: Check that form field names match template variables

Example form field to template variable mapping:
- Form: `name="user_name"` → Template: `{{user_name}}`
- Form: `name="user_email"` → Template: `{{user_email}}`
- Form: `name="message"` → Template: `{{message}}`

### "Rate Limit Exceeded"

- EmailJS has rate limits. Free plan allows ~200 emails/day
- Upgrade your plan on EmailJS if needed

### Gmail not sending

1. Go to EmailJS dashboard
2. Click your Gmail service
3. Click the **refresh button** to reconnect Gmail
4. Grant permissions again

### Emails going to spam

This is normal for first few emails. To improve deliverability:

1. In your template, add a footer with your business info
2. Use a branded "From" name in EmailJS settings
3. Test with your email provider's spam filter

## Advanced: Add CC/BCC

In your form submission code, you can add:

```javascript
const templateParams = {
    user_name: formData.get("user_name"),
    user_email: formData.get("user_email"),
    message: formData.get("message"),
    // Add CC/BCC
    cc_email: "cc@huematrix.in",
    bcc_email: "archive@huematrix.in",
}
```

Then in your EmailJS template, use `{{cc_email}}` and `{{bcc_email}}`

## Production Deployment

### On Vercel (or any hosting):

1. Go to your deployment dashboard
2. Add environment variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID=...`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...`

3. Redeploy your site

### Security Note:

Since these are `NEXT_PUBLIC_` variables, they're visible in the browser. This is fine for public APIs like EmailJS. The public key is intentionally public and cannot be used to access your email account.

## Form Fields Reference

### Contact Form Fields (`/contact`)
- `user_name`: User's name
- `user_email`: User's email
- `phone`: Phone number
- `location`: Project location
- `services`: Selected services (pill buttons)
- `project_types`: Selected project types (pill buttons)
- `message`: Project description

### Work With Us Form Fields (`/work-with-us`)
- `user_name`: Candidate's full name
- `user_email`: Candidate's email
- `phone`: Phone number
- `company`: Current company
- `interests`: Selected areas of interest (pill buttons)
- `experience`: Years of experience
- `portfolio`: Portfolio/website URL
- `message`: Why work together message

## Need Help?

- EmailJS Docs: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Community: [https://www.emailjs.com/forum/](https://www.emailjs.com/forum/)
- Contact: hello@huematrix.in

---

**Last Updated**: 2024
