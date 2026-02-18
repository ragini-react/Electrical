// Google Analytics helper functions

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  event({
    action: 'click',
    category: 'Button',
    label: buttonName,
  });
};

// Track form submissions
export const trackFormSubmit = (formName: string) => {
  event({
    action: 'submit',
    category: 'Form',
    label: formName,
  });
};

// Track phone calls
export const trackPhoneCall = () => {
  event({
    action: 'click',
    category: 'Contact',
    label: 'Phone Call',
  });
};

// Track WhatsApp clicks
export const trackWhatsAppClick = () => {
  event({
    action: 'click',
    category: 'Contact',
    label: 'WhatsApp',
  });
};

// Track theme changes
export const trackThemeChange = (theme: string) => {
  event({
    action: 'change',
    category: 'Theme',
    label: theme,
  });
};
