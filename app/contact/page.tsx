import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import siteData from '@/data/site.json';
import { SiteData } from '@/types/site';

const data: SiteData = siteData as SiteData;

export const metadata = {
  title: `Contact Us - ${data.company.name}`,
  description: data.contact.subtitle,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header company={data.company} />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200">
              Get in touch with our expert team for all your electrical needs
            </p>
          </div>
        </div>
      </section>

      <ContactForm contact={data.contact} company={data.company} />
      <Footer company={data.company} socialMedia={data.socialMedia} />
    </div>
  );
}
