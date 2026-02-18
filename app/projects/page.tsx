import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import CTASection from '@/components/CTASection';
import ThemeSelector from '@/components/ThemeSelector';
import ScrollToTop from '@/components/ScrollToTop';
import FloatingContact from '@/components/FloatingContact';
import siteData from '@/data/site.json';
import { SiteData } from '@/types/site';

const data: SiteData = siteData as SiteData;

export const metadata = {
  title: `Projects - ${data.company.name}`,
  description: 'Explore our portfolio of completed electrical projects across residential, commercial, and industrial sectors.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Header company={data.company} />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 dark:from-[#1a1a1a] dark:via-[#252525] dark:to-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-gray-200">
              Showcasing our expertise through successfully completed electrical projects
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Project Statistics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-6 text-white">
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-6 text-white">
                <div className="text-4xl font-bold mb-2">3500+</div>
                <div className="text-sm">Satisfied Clients</div>
              </div>
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-6 text-white">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm">Quality Assured</div>
              </div>
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-6 text-white">
                <div className="text-4xl font-bold mb-2">13+</div>
                <div className="text-sm">Years Experience</div>
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
