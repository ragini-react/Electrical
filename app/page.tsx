import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProjectsSection from '@/components/ProjectsSection';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ThemeSelector from '@/components/ThemeSelector';
import ScrollToTop from '@/components/ScrollToTop';
import FloatingContact from '@/components/FloatingContact';
import siteData from '@/data/site.json';
import { SiteData } from '@/types/site';

const data: SiteData = siteData as SiteData;

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header company={data.company} />
      <Hero hero={data.hero} company={data.company} />
      <ServicesSection services={data.services} />
      <FeaturesSection features={data.features} />
      <ProjectsSection projects={data.projects} />
      <Testimonials testimonials={data.testimonials} />
      <CTASection company={data.company} />
      <ContactForm contact={data.contact} company={data.company} />
      <Footer company={data.company} socialMedia={data.socialMedia} />
      <ThemeSelector />
      <ScrollToTop />
      <FloatingContact company={data.company} />
    </div>
  );
}
