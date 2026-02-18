import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import ThemeSelector from '@/components/ThemeSelector';
import ScrollToTop from '@/components/ScrollToTop';
import FloatingContact from '@/components/FloatingContact';
import siteData from '@/data/site.json';
import { SiteData } from '@/types/site';

const data: SiteData = siteData as SiteData;

export const metadata = {
  title: `Services - ${data.company.name}`,
  description: 'Professional electrical services including home wiring, industrial installation, repairs, and maintenance.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header company={data.company} />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 dark:from-[#1a1a1a] dark:via-[#252525] dark:to-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive electrical solutions for residential, commercial, and industrial needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="mt-16 bg-white dark:bg-[#252525] rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Our Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-bold text-lg mb-2 dark:text-white">Licensed & Certified</h3>
                <p>All our electricians are fully licensed and certified professionals with years of experience.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 dark:text-white">Quality Materials</h3>
                <p>We use only premium quality electrical components and materials from trusted brands.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 dark:text-white">Safety First</h3>
                <p>We follow strict safety protocols and comply with all electrical safety standards.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 dark:text-white">Warranty Coverage</h3>
                <p>All our work comes with comprehensive warranty coverage for your peace of mind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection company={data.company} />
      <Footer company={data.company} socialMedia={data.socialMedia} />
      <ThemeSelector />
      <ScrollToTop />
      <FloatingContact company={data.company} />
    </div>
  );
}
