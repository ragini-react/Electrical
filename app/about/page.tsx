import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ThemeSelector from '@/components/ThemeSelector';
import ScrollToTop from '@/components/ScrollToTop';
import FloatingContact from '@/components/FloatingContact';
import siteData from '@/data/site.json';
import { SiteData } from '@/types/site';
import { motion } from 'framer-motion';

const data: SiteData = siteData as SiteData;

export const metadata = {
  title: `About Us - ${data.company.name}`,
  description: data.about.subtitle,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header company={data.company} />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 dark:from-[#1a1a1a] dark:via-[#252525] dark:to-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {data.about.title}
            </h1>
            <p className="text-xl text-gray-200">
              {data.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {data.about.description.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {data.about.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-8 text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mb-6">
                <span className="text-yellow-400 text-3xl">🎯</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {data.about.mission}
              </p>
            </div>

            <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mb-6">
                <span className="text-yellow-400 text-3xl">👁️</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {data.about.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-[#252525] rounded-lg">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-900 text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
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
