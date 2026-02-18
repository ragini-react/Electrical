'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Company } from '@/types/site';

interface CTASectionProps {
  company: Company;
}

export default function CTASection({ company }: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 dark:from-[#252525] dark:via-[#1a1a1a] dark:to-[#252525] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Power Up Your Project?
          </h2>
          <p className="text-xl text-gray-200 mb-12">
            Get in touch with our expert team today for a free consultation and quote
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={`tel:${company.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 hover:shadow-2xl flex items-center justify-center space-x-2"
            >
              <Phone size={24} />
              <span>Call Now</span>
            </motion.a>

            <motion.a
              href={`mailto:${company.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50 flex items-center justify-center space-x-2"
            >
              <Mail size={24} />
              <span>Email Us</span>
            </motion.a>

            {company.whatsapp && (
              <motion.a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all duration-300 hover:shadow-2xl flex items-center justify-center space-x-2"
              >
                <MessageCircle size={24} />
                <span>WhatsApp</span>
              </motion.a>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-sm">Emergency Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">Free</div>
              <div className="text-sm">Consultation & Quote</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-sm">Satisfaction Guaranteed</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
