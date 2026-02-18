export interface Company {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  whatsapp?: string;
}

export interface Hero {
  title: string;
  subtitle: string;
  image: string;
  cta: {
    primary: string;
    secondary: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  category: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export interface AboutSection {
  title: string;
  subtitle: string;
  description: string[];
  stats: {
    label: string;
    value: string;
  }[];
  mission: string;
  vision: string;
}

export interface ContactInfo {
  title: string;
  subtitle: string;
  formFields: {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  };
  submitButton: string;
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
}

export interface SiteData {
  company: Company;
  hero: Hero;
  services: Service[];
  projects: Project[];
  features: Feature[];
  testimonials: Testimonial[];
  about: AboutSection;
  contact: ContactInfo;
  socialMedia: SocialMedia[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
