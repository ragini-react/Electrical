# PowerTech Electricals - Premium Electrical Services Website

A modern, premium, and professional electrical services website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This website is fully dynamic, with all content managed through JSON files, making it easy to customize and scale.

## 🌟 Features

- **Fully Dynamic Content**: All content is managed through JSON files - no hardcoded text
- **Premium Design**: Strong, professional, and trustworthy design suitable for electrical contractors
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Mobile-First Responsive**: Perfect display on all devices
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Type-Safe**: Built with TypeScript for reliability
- **Scalable Architecture**: Easy to extend for multiple clients or CMS integration

## 🚀 Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
electrical-services/
├── app/
│   ├── page.tsx              # Home page
│   ├── services/page.tsx     # Services page
│   ├── projects/page.tsx     # Projects page
│   ├── about/page.tsx        # About page
│   ├── contact/page.tsx      # Contact page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Header.tsx            # Sticky header with navigation
│   ├── Hero.tsx              # Hero section
│   ├── ServicesSection.tsx   # Services overview
│   ├── ServiceCard.tsx       # Individual service card
│   ├── ProjectsSection.tsx   # Projects gallery
│   ├── ProjectCard.tsx       # Individual project card
│   ├── FeaturesSection.tsx   # Features/Why Choose Us
│   ├── Testimonials.tsx      # Client testimonials
│   ├── CTASection.tsx        # Call-to-action section
│   ├── ContactForm.tsx       # Contact form
│   └── Footer.tsx            # Footer with links
├── data/
│   └── site.json             # All website content
├── types/
│   └── site.ts               # TypeScript interfaces
└── lib/
    └── utils.ts              # Utility functions
```

## 🎨 Design System

### Color Palette
- **Primary**: #1E3A8A (Deep Blue) - Trust and professionalism
- **Accent**: #F59E0B (Electric Yellow/Gold) - Energy and attention
- **Background**: White / Light Gray
- **Text**: Gray scale for hierarchy

### Typography
- **Font Family**: Inter
- **Headings**: Bold, large sizes for impact
- **Body**: Clean, readable sizes

## 📝 Content Management

All website content is managed through `/data/site.json`. Simply edit this file to update:

- Company information
- Services offered
- Project portfolio
- Testimonials
- Features
- Contact details
- Social media links
- SEO metadata

### Example: Adding a New Service

```json
{
  "id": "new-service",
  "title": "Solar Installation",
  "description": "Professional solar panel installation services",
  "icon": "lightbulb",
  "details": "Complete solar energy solutions..."
}
```

### Example: Adding a New Project

```json
{
  "id": "new-project",
  "title": "Smart Office Building",
  "description": "Complete electrical automation",
  "image": "/images/project-new.jpg",
  "location": "Mumbai",
  "category": "Commercial"
}
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
cd electrical-services
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎯 Pages

- **Home** (`/`) - Complete overview with all sections
- **Services** (`/services`) - Detailed services listing
- **Projects** (`/projects`) - Portfolio of completed work
- **About** (`/about`) - Company information and mission
- **Contact** (`/contact`) - Contact form and information

## 🔧 Customization

### Changing Company Information

Edit `/data/site.json`:

```json
{
  "company": {
    "name": "Your Company Name",
    "tagline": "Your Tagline",
    "phone": "+91 1234567890",
    "email": "info@yourcompany.com",
    "address": "Your Address"
  }
}
```

### Changing Colors

Edit Tailwind classes in components:
- Primary: `bg-blue-900`, `text-blue-900`
- Accent: `bg-yellow-400`, `text-yellow-400`

### Adding New Pages

1. Create a new page in `/app/your-page/page.tsx`
2. Import and use existing components
3. Add navigation link in `Header.tsx`

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Other Platforms
Build the project and deploy the `.next` folder:
```bash
npm run build
```

## 📱 Mobile Features

- Sticky call button
- Mobile-optimized navigation
- Touch-friendly interface
- Responsive images
- Fast loading

## ♿ Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- High contrast colors
- Readable font sizes

## 🔮 Future Enhancements

- CMS integration (Contentful, Sanity, etc.)
- Multi-language support
- Blog section
- Online booking system
- Live chat integration
- Admin dashboard

## 📄 License

This project is designed for MakeMySite and can be customized for multiple clients.

## 🤝 Support

For support or customization requests, contact the development team.

---

Built with ❤️ for professional electrical service providers
