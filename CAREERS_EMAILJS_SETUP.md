# EmailJS Setup for Careers Page - Complete Guide

## Overview
The careers page now has full EmailJS integration for both forms:
- **Join Our Team** - Collects job application submissions
- **Partner With Us** - Collects vendor/partnership inquiries

## Step-by-Step Setup

### 1. Create an EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com)
2. Click **"Sign Up Free"**
3. Sign up using your email or social account
4. Verify your email address
5. Log into your dashboard

### 2. Create Email Service
1. In the dashboard, go to **"Email Services"** (left sidebar)
2. Click **"Add Service"**
3. Choose your email provider:
   - **Gmail** (recommended - easiest setup)
   - **Outlook/Hotmail**
   - **Yahoo**
   - **Custom SMTP**
4. For Gmail:
   - Select "Gmail" from the list
   - Click "Connect Account"
   - Sign in with your Google account
   - Grant EmailJS permissions
   - Name it: `Gmail Service` or similar
5. Click **"Create Service"**
6. **Copy your Service ID** (looks like: `service_xxxxxxxxx`)

### 3. Create Email Templates

#### Template 1: Careers Form Template

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Name it: `careers_form_template`
4. Use this template code:

```
From: {{from_email}}
Name: {{from_name}}

Subject: New Career Application from {{from_name}}

---

APPLICANT DETAILS:
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Location: {{location}}
Role Applied For: {{role}}
Experience: {{experience}} years
Portfolio: {{portfolio}}

Form Type: {{form_type}}
```

5. Click **"Save Template"**
6. **Copy the Template ID** (looks like: `template_xxxxxxxxx`)

#### Template 2: Vendors/Partnerships Template

1. Click **"Create New Template"**
2. Name it: `vendors_form_template`
3. Use this template code:

```
From: {{from_email}}
Company: {{company_name}}

Subject: New Partnership Inquiry from {{company_name}}

---

COMPANY DETAILS:
Company/Individual Name: {{company_name}}
Contact Person: {{contact_person}}
Email: {{from_email}}
Phone: {{phone}}
Location: {{location}}
Service Type: {{service_type}}
Portfolio/Website: {{portfolio}}

Form Type: {{form_type}}
```

5. Click **"Save Template"**
6. **Copy the Template ID** (looks like: `template_xxxxxxxxx`)

### 4. Get Your API Key

1. In the EmailJS dashboard, go to **Account > API Keys**
2. Copy your **Public Key** (looks like: `xxxxxxxxx`)

### 5. Update `.env.local` File

Replace the placeholder values in `.env.local` with your actual credentials:

```env
# Your EmailJS Public Key
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_from_api_keys

# Your EmailJS Service ID
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_from_email_services

# Template IDs
NEXT_PUBLIC_EMAILJS_CAREERS_TEMPLATE_ID=your_careers_template_id
NEXT_PUBLIC_EMAILJS_VENDORS_TEMPLATE_ID=your_vendors_template_id

# Email addresses (optional - customize these)
NEXT_PUBLIC_CAREERS_EMAIL=careers@huematrix.in
NEXT_PUBLIC_VENDORS_EMAIL=partnerships@huematrix.in
```

### 6. Test the Forms

1. Start your development server: `npm run dev`
2. Go to `http://localhost:3000/careers`
3. Fill out the "Join Our Team" form
4. Click **"Submit Application"**
5. You should see a success message
6. Check your email for the submission

### Features

✅ **Two separate forms** with dedicated handlers
✅ **Loading states** - Button shows "Submitting..." while processing
✅ **Success/Error messages** - Visual feedback with icons
✅ **Resume upload** - File tracking (note: currently displays filename only)
✅ **Form validation** - Required fields marked with *
✅ **Responsive design** - Works on mobile and desktop
✅ **Error handling** - Catches and displays submission errors

### Email Variables Reference

#### Available in both forms:
- `{{from_email}}` - Submitted email address
- `{{phone}}` - Phone number
- `{{form_type}}` - "Careers" or "Partnership"

#### Careers template only:
- `{{from_name}}` - Applicant full name
- `{{location}}` - Current location
- `{{role}}` - Role applying for
- `{{experience}}` - Years of experience
- `{{portfolio}}` - Portfolio link

#### Vendors template only:
- `{{company_name}}` - Company or individual name
- `{{contact_person}}` - Contact person name
- `{{location}}` - Company location
- `{{service_type}}` - Type of service
- `{{portfolio}}` - Previous work/website link

### Troubleshooting

**"Failed to submit" error:**
- Check that all environment variables are correctly set
- Verify Service ID and Template IDs are correct
- Make sure Public Key is valid
- Check EmailJS dashboard for service/template status

**Not receiving emails:**
- Verify your email service is connected in EmailJS
- Check email spam folder
- Ensure template variables match the form field names
- Test with EmailJS dashboard directly

**Testing in development:**
- Make sure `.env.local` is loaded (restart dev server after changes)
- Check browser console (F12) for detailed error messages
- Use EmailJS test feature in dashboard

### Future Enhancements

Possible improvements:
- Add file upload support for resume (currently tracking filename only)
- Add email notification to applicants
- Implement form rate limiting
- Add captcha for spam prevention
- Store submissions in database
- Create admin dashboard to view submissions
