# Environment Variables Setup

## Google Analytics Setup

To enable Google Analytics tracking on your website:

1. **Get your Google Analytics ID:**
   - Go to https://analytics.google.com
   - Create a new property for your website
   - Copy your Measurement ID (format: G-XXXXXXXXXX)

2. **Create `.env.local` file in the root directory:**
   ```bash
   touch .env.local
   ```

3. **Add your Google Analytics ID:**
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

4. **Restart your development server:**
   ```bash
   npm run dev
   ```

## What Gets Tracked

The analytics system automatically tracks:

- ✅ **Page Views** - Every page visit
- ✅ **Button Clicks** - CTA buttons, navigation
- ✅ **Form Submissions** - Contact form
- ✅ **Phone Calls** - When users click call button
- ✅ **WhatsApp Clicks** - When users click WhatsApp button
- ✅ **Theme Changes** - When users change color themes

## Privacy Note

Make sure to add a privacy policy page and cookie consent banner if required by your region's laws (GDPR, CCPA, etc.).
